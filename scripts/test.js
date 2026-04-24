import fs from 'fs';
import path from 'path';

const currPath = path.resolve('./src/data/curriculum.ts');
let fileContent = fs.readFileSync(currPath, 'utf8');

// Debug
console.log("Index 1:", fileContent.indexOf('export const curriculumData: Lecture[] = ['));
