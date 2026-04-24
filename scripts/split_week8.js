import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const currPath = path.resolve('./src/data/curriculum.ts');
let fileContent = fs.readFileSync(currPath, 'utf8');

const arrayStart = fileContent.indexOf('export const curriculumData: Lecture[] = [') + 'export const curriculumData: Lecture[] = '.length;
const arrayEnd = fileContent.lastIndexOf('].sort((a, b) => a.week - b.week);') + 1;

let dataStr = fileContent.substring(arrayStart, arrayEnd);
fs.writeFileSync('./scripts/temp_split.cjs', `module.exports = ${dataStr};`);

const require = createRequire(import.meta.url);
const data = require(path.resolve('./scripts/temp_split.cjs'));

const week8Index = data.findIndex(l => l.week === 8);
const week8 = data[week8Index];

// Find indices of headings in week8.content
const idx1 = week8.content.findIndex(c => c.heading === "--- 웨스트코트와 호트 이론의 허구 ---");
const idx2 = week8.content.findIndex(c => c.heading === "--- 두 스트림 모델과 전수의 역사 ---");
const idx3 = week8.content.findIndex(c => c.heading === "--- 킹제임스 성경의 가치와 우수성 ---");
const idx4 = week8.content.findIndex(c => c.heading === "--- 요약 및 본문 수호의 사명 ---");

const part1Content = week8.content.slice(idx1, idx3);
const part2Content = week8.content.slice(idx3);

const w8 = {
  week: 8,
  stage: 5,
  stageTitle: "현대 비평 본문 비판과 역사 (상)",
  title: "현대 비평 본문 비판과 역사",
  instructor: "",
  description: "1. 웨스트코트와 호트 이론의 허구 - 현대 본문 비평의 기초가 된 '수리아 본문 개정설'의 역사적 증거 부족을 비판하고, 주관적 '내적 증거' 우선주의가 가져온 본문의 불확실성을 분석한다. 2. 두 스트림 모델과 전수의 역사 - 안디옥(순수)과 알렉산드리아(변개)의 두 흐름 모델을 통해 본문 보존의 역사를 시각화하고, 진리가 다수의 신자들이 사용해온 통로 속에 보존되어 왔음을 확인한다.",
  sourceReferences: [
    { author: "데이비드 풀러", book: "어느 성경인가? (Which Bible?)" },
    { author: "피터 럭크만", book: "그리스도인의 사본학 핸드북 (The Christian's Handbook of Manuscript Evidence)" }
  ],
  content: part1Content,
  chart: week8.chart
};

const w9 = {
  week: 9,
  stage: 5,
  stageTitle: "킹제임스 성경과 최종 결론 (하)",
  title: "킹제임스 성경과 최종 결론",
  instructor: "",
  description: "1. 킹제임스 성경의 가치와 우수성 - TR에 근거한 KJV의 번역 원칙과 우수성을 살펴보고, 400년간 보존되어 온 이 성경이 현대 기독교 신앙에 주는 의미를 고찰한다. 2. 요약 및 본문 수호의 사명 - 12주간의 내용을 총망라하여 본문 문제의 영적 전쟁 성격을 재확인하고, 성경의 무오성과 보존을 믿는 신앙으로 무장한 수호자로 서는 결론의 시간.",
  sourceReferences: [
    { author: "게일 리플링거", book: "뉴에이지 성경 역본들 (New Age Bible Versions)" },
    { author: "윌버 피커링", book: "신약 성경 본문의 정체 (The Identity of the New Testament Text)" }
  ],
  content: part2Content,
  quote: week8.quote
};

data.splice(week8Index, 1, w8, w9);

const newArrayStr = JSON.stringify(data, null, 2);
const newFileContent = fileContent.substring(0, arrayStart) + newArrayStr + '\n.sort((a, b) => a.week - b.week);\n';

fs.writeFileSync(currPath, newFileContent, 'utf8');
console.log('Week 8 split into 8 and 9!'); 
