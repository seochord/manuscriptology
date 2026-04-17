const fs = require('fs');
const filePath = '/app/applet/src/data/curriculum.ts';
let content = fs.readFileSync(filePath, 'utf-8');
content = content.replace('export const curriculumData: Lecture.. = .', 'export const curriculumData: Lecture[] = [');
fs.writeFileSync(filePath, content);
