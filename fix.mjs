import fs from 'fs';

let data = fs.readFileSync('src/data/curriculum.ts', 'utf8');

const lines = data.split('\n');

// We want to keep lines up to 761 (so index 0 to 760).
// Then add '];' at the end.
const newLines = lines.slice(0, 761);
newLines.push('];');

fs.writeFileSync('src/data/curriculum.ts', newLines.join('\n'));
console.log('Fixed');
