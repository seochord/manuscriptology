const fs = require('fs');

const filePath = '/app/applet/src/data/curriculum.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Find the start of the array
const startIndex = content.indexOf('export const curriculumData: Lecture[] = [');
const arrayStart = content.indexOf('[', startIndex);

// We need to find the end of the array.
// Since it's at the end of the file, we can just find the last '];'
const arrayEnd = content.lastIndexOf('];') + 1;

const jsonString = content.substring(arrayStart, arrayEnd);

// The jsonString might have trailing commas or JS-specific syntax (like unquoted keys, though it looks like it's mostly JSON).
// Let's use eval to parse it.
let data;
try {
  data = eval('(' + jsonString + ')');
} catch (e) {
  console.error("Failed to parse:", e);
  process.exit(1);
}

// Now modify the data
data.forEach(lecture => {
  lecture.content.forEach(section => {
    // 1. Remove images
    if (section.images) {
      delete section.images;
    }
    
    // 2. For "5. 한국어 성경 번역", remove foreign Bibles
    if (section.heading.includes('한국어 성경 번역')) {
      section.paragraphs = section.paragraphs.filter(p => {
        const isForeign = 
          p.includes('Revised Version(RV)') || 
          p.includes('America Standard Version') || 
          p.includes('Revised Standard Version');
        return !isForeign;
      });
      
      // The remaining paragraphs are already in chronological order:
      // 1784, 1882, 1885, 1891, 1911, 1952, 1977, 1993, 1994, 1998, 1999, 2000, 2001, 2022, 2022
      // So no explicit sorting is needed, but we can sort them just in case by extracting the year.
      section.paragraphs.sort((a, b) => {
        const matchA = a.match(/\b(17|18|19|20)\d{2}\b/);
        const matchB = b.match(/\b(17|18|19|20)\d{2}\b/);
        const yearA = matchA ? parseInt(matchA[0]) : 9999;
        const yearB = matchB ? parseInt(matchB[0]) : 9999;
        return yearA - yearB;
      });
    }
  });
});

// Convert back to string
const newJsonString = JSON.stringify(data, null, 2);

// Replace in content
const newContent = content.substring(0, arrayStart) + newJsonString + content.substring(arrayEnd);

fs.writeFileSync(filePath, newContent);
console.log("Successfully updated curriculum.ts");
