const fs = require('fs');
const path = require('path');

const srcDir = './preservation of the Bible/resources';
const destDir = './public/preservation_of_the_bible';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
for (const file of files) {
  if (file.endsWith('.jpg') || file.endsWith('.png')) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
  }
}
console.log('Copied files');
