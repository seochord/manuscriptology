import fs from 'fs';

const data = JSON.parse(fs.readFileSync('parsed_data.json', 'utf-8'));

const sections = data.filter((s: any) => s.paragraphs.length > 0 || s.images.length > 0);

const lastSection = sections[sections.length - 1];

const ntParagraphs = lastSection.paragraphs.slice(0, 15);
const ntImages = lastSection.images.slice(0, 16);

const refParagraphs = lastSection.paragraphs.slice(15, 42);
const refImages = lastSection.images.slice(16, 43);

const krParagraphs = lastSection.paragraphs.slice(42);
const krImages = lastSection.images.slice(43);

sections[sections.length - 1] = {
  heading: "3. 신약 보존",
  paragraphs: ntParagraphs,
  images: ntImages
};

sections.push({
  heading: "4. 종교개혁과 성경 번역",
  paragraphs: refParagraphs,
  images: refImages
});

sections.push({
  heading: "5. 한국어 성경 번역",
  paragraphs: krParagraphs,
  images: krImages
});

sections[0].heading = "1. " + sections[0].heading;
sections[1].heading = "2. " + sections[1].heading;

let curriculum = fs.readFileSync('src/data/curriculum.ts', 'utf-8');

const startIndex = curriculum.indexOf('    title: "성경 보존 및 사본의 역사",');
const contentStartIndex = curriculum.indexOf('    content: [', startIndex);
const endIndex = curriculum.indexOf('  }\n];', contentStartIndex);

if (startIndex !== -1 && contentStartIndex !== -1 && endIndex !== -1) {
  const newContentStr = '    content: ' + JSON.stringify(sections, null, 6).replace(/\n/g, '\n    ') + '\n';
  curriculum = curriculum.substring(0, contentStartIndex) + newContentStr + curriculum.substring(endIndex);
  fs.writeFileSync('src/data/curriculum.ts', curriculum);
  console.log('Updated curriculum.ts successfully');
} else {
  console.log('Could not find indices');
}
