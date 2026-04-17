import fs from 'fs';

let data = fs.readFileSync('src/data/curriculum.ts', 'utf8');

// Shift weeks 1-12 to 4-15
data = data.replace(/"week":\s*(\d+),/g, (match, p1) => {
    let week = parseInt(p1);
    if (week >= 1 && week <= 15) { // just in case it was already shifted
        return `"week": ${week + 3},`;
    }
    return match;
});

// Now we need to add the definitions for week 1, 2, 3 right after week 0.
// Let's find week: 0
data = data.replace(
  /\{\s*"week":\s*0,\s*"stage":\s*0,\s*"stageTitle":\s*"[^"]+",\s*"title":\s*"[^"]+",\s*"instructor":\s*"",\s*"description":\s*"[^"]+",\s*"content":\s*\[[\s\S]*?\]\s*\}/, 
  (match) => {
      // Create new week 0, 1, 2, 3 objects
      return `{
    "week": 0,
    "stage": 0,
    "stageTitle": "들어가며 (Introduction)",
    "title": "말씀에 대한 성경기록",
    "instructor": "",
    "description": "성경의 기원과 성경기록에 관한 구/신약 구절들을 살펴봅니다.",
    "content": []
  },
  {
    "week": 1,
    "stage": 0,
    "stageTitle": "성경의 기초",
    "title": "성경구성, 권별 주제 대조표",
    "instructor": "",
    "description": "성경의 기본 구조와 각 권별 주제 대조표 및 통계를 알아봅니다.",
    "content": []
  },
  {
    "week": 2,
    "stage": 0,
    "stageTitle": "성경의 기초",
    "title": "성경보존, 사본사용, 번역에 대한 말씀",
    "instructor": "",
    "description": "성경 보존과 사본 사용, 번역에 관한 성경 속 기록들을 확인합니다.",
    "content": []
  },
  {
    "week": 3,
    "stage": 0,
    "stageTitle": "성경의 역사",
    "title": "성경 사본 및 번역의 역사",
    "instructor": "",
    "description": "구약과 신약의 주요 사본들과 번역본들의 보존 역사를 총정리합니다.",
    "content": []
  }`;
  }
);

fs.writeFileSync('src/data/curriculum.ts', data);
console.log("Weeks shifted and customized.");
