import fs from 'fs';

const filePath = './src/data/curriculum.ts';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/heading: "1\. 서론:.*"/g, 'heading: "1. 서론"');
content = content.replace(/heading: "2\. 본론:.*"/g, 'heading: "2. 본론"');
content = content.replace(/heading: "3\. 결론:.*"/g, 'heading: "3. 결론"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Headings updated successfully.');
