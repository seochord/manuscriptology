import fs from 'fs';
import path from 'path';

const currPath = path.resolve('./src/data/curriculum.ts');
let fileContent = fs.readFileSync(currPath, 'utf8');

// I'll extract the JSON array part.
const arrayStart = fileContent.indexOf('export const curriculumData: Lecture[] = [') + 'export const curriculumData: Lecture[] = '.length;
const arrayEnd = fileContent.lastIndexOf('].sort((a, b) => a.week - b.week);') + 1;

let dataStr = fileContent.substring(arrayStart, arrayEnd);

fs.writeFileSync('./scripts/temp.cjs', `module.exports = ${dataStr};`);

const tempPath = path.resolve('./scripts/temp.cjs');
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const data = require(tempPath);

// Merge logic
const newCurriculum = [];

// Week 0-3 keep as is
newCurriculum.push(...data.filter(l => l.week <= 3));

// Group weeks 4-15 by stageTitle
let advancedLectures = data.filter(l => l.week >= 4);
let currentStageIndex = 4;
let grouped = {};

for (const lec of advancedLectures) {
  if (!grouped[lec.stageTitle]) {
    grouped[lec.stageTitle] = [];
  }
  grouped[lec.stageTitle].push(lec);
}

for (const [stageTitle, lectures] of Object.entries(grouped)) {
  // Merge lectures
  let mergedContent = [];
  let mergedDescription = lectures.map((l, i) => `${i + 1}. ${l.title} - ${l.description}`).join(' ');
  
  for (const lec of lectures) {
      mergedContent.push({
          heading: `--- ${lec.title} ---`,
          paragraphs: []
      });
      mergedContent.push(...lec.content);
  }

  // Find a unified title from stageTitle or something
  let unifiedTitle = stageTitle.replace(/\s*\(.*\)\s*/, ''); // remove (1-2주) etc.

  newCurriculum.push({
    week: currentStageIndex,
    stage: lectures[0].stage,
    stageTitle: stageTitle,
    title: unifiedTitle,
    instructor: lectures[0].instructor,
    description: mergedDescription,
    content: mergedContent,
    quote: lectures[0].quote,
    chart: lectures.find(l => l.chart)?.chart || undefined
  });
  currentStageIndex++;
}

// Generate new TS content
const newArrayStr = JSON.stringify(newCurriculum, null, 2);

const newFileContent = fileContent.substring(0, arrayStart) + newArrayStr + '\n.sort((a, b) => a.week - b.week);\n';

fs.writeFileSync(currPath, newFileContent, 'utf8');
console.log(`Merged! Total weeks is now ${currentStageIndex - 1}`);
