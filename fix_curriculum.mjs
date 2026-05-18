import fs from 'fs';

const inputPath = './src/data/curriculum.ts';
let content = fs.readFileSync(inputPath, 'utf8');

const prefix = 'export const curriculumData: Lecture[] = ';
const arrayStart = content.indexOf(prefix) + prefix.length;
const arrayEnd = content.lastIndexOf(']') + 1;
const arrayStr = content.substring(arrayStart, arrayEnd);

let data = JSON.parse(arrayStr);

data.forEach(lecture => {
  if (lecture.week >= 4 && lecture.week <= 6) {
    let sectionCounter = 1;

    lecture.content.forEach(section => {
      // Clean paragraphs
      section.paragraphs = section.paragraphs.map(p => {
        return p.replace(/\*\*/g, '').replace(/^- /g, '• ');
      });

      // Format headings
      if (/^[가나다라마바사아자차카타파하]\.\s/.test(section.heading)) {
        section.heading = section.heading.replace(/^[가나다라마바사아자차카타파하]\.\s/, `${sectionCounter}. `);
        sectionCounter++;
      } else if (/^\d+\.\s/.test(section.heading)) {
        const parentNum = sectionCounter - 1;
        section.heading = section.heading.replace(/^(\d+)\.\s/, `${parentNum}.$1 `);
      } else if (section.heading === "정리 및 토론") {
        const parentNum = sectionCounter - 1;
        section.heading = `${parentNum}.5 정리 및 토론`; // Or maybe we can count how many subheadings there were. But let's just make it a nice consistent number or bullet.
        // Actually, maybe we just don't number "정리 및 토론" and keep it as is, or use "• 정리 및 토론"
        section.heading = `• 정리 및 토론`;
      }
    });
  }
});

const newContent = content.substring(0, arrayStart) + JSON.stringify(data, null, 2) + content.substring(arrayEnd);

fs.writeFileSync(inputPath, newContent, 'utf8');
console.log('Done!');
