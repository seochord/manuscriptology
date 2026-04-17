import fs from 'fs';

let data = fs.readFileSync('src/data/curriculum.ts', 'utf8');

// The file has a single export const curriculumData = [ ... ];
// We will write a small script to parse the array out, sort it, and put it back.
// Since evaluating TS isn't trivial, we can just sort the array when exporting? No, we can append `.sort((a,b)=>a.week-b.week)` to the array!
// So: `export const curriculumData: Lecture[] = [ ... ].sort((a, b) => a.week - b.week);`
if (!data.includes('sort((a, b) => a.week - b.week)')) {
    data = data.replace('];\n', '].sort((a, b) => a.week - b.week);\n');
    if (!data.includes('.sort')) {
      data = data.replace('];', '].sort((a, b) => a.week - b.week);');
    }
    fs.writeFileSync('src/data/curriculum.ts', data);
    console.log('Sorted curriculumData');
} else {
    console.log('Already sorted');
}
