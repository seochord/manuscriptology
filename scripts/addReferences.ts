import fs from 'fs';
import path from 'path';

const currPath = path.resolve('./src/data/curriculum.ts');
let fileContent = fs.readFileSync(currPath, 'utf8');

// 1. Add interface property
fileContent = fileContent.replace(
  '  chart?: { title: string; url: string; description: string };\n}',
  '  chart?: { title: string; url: string; description: string };\n  sourceReferences?: { author: string; book: string }[];\n}'
);

// 2. We will insert the sourceReferences into the curriculumData json array manually
const arrayStart = fileContent.indexOf('export const curriculumData: Lecture[] = [') + 'export const curriculumData: Lecture[] = '.length;
const arrayEnd = fileContent.lastIndexOf('].sort((a, b) => a.week - b.week);') + 1;

let dataStr = fileContent.substring(arrayStart, arrayEnd);
fs.writeFileSync('./scripts/temp_sources.cjs', `module.exports = ${dataStr};`);

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const data = require(path.resolve('./scripts/temp_sources.cjs'));

const referencesMap = {
  4: [
    { author: "에드워드 F. 힐즈", book: "킹제임스 성경 변증 (The King James Version Defended)" }
  ],
  5: [
    { author: "존 윌리엄 버건", book: "수정판의 재수정 (The Revision Revised)" },
    { author: "에드워드 밀러", book: "거룩한 복음서들의 전통 본문 옹호 (The Traditional Text of the Holy Gospels)" }
  ],
  6: [
    { author: "에드워드 F. 힐즈", book: "킹제임스 성경 변증 (The King James Version Defended)" }
  ],
  7: [
    { author: "윌버 피커링", book: "신약 성경 본문의 정체 (The Identity of the New Testament Text)" }
  ],
  8: [
    { author: "윌버 피커링", book: "신약 성경 본문의 정체 (The Identity of the New Testament Text)" },
    { author: "데이비드 O. 풀러", book: "어느 성경인가? (Which Bible?)" }
  ]
};

data.forEach(lecture => {
  if (referencesMap[lecture.week]) {
    lecture.sourceReferences = referencesMap[lecture.week];
  }
});

const newArrayStr = JSON.stringify(data, null, 2);
const newFileContent = fileContent.substring(0, arrayStart) + newArrayStr + '\n.sort((a, b) => a.week - b.week);\n';

fs.writeFileSync(currPath, newFileContent, 'utf8');
console.log('Added references!');
