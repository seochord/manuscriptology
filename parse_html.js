const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('/preservation of the Bible/preservation of the bible.html', 'utf-8');
const $ = cheerio.load(html);

const rows = $('table.waffle tbody tr');

let currentSection = null;
const sections = [];

rows.each((i, row) => {
  const cells = $(row).find('td');
  if (cells.length === 0) return;

  const rowText = $(row).text().trim();
  
  const images = [];
  $(row).find('img').each((j, img) => {
    const src = $(img).attr('src');
    if (src && src.startsWith('resources/')) {
      images.push('/preservation_of_the_bible/' + src.replace('resources/', ''));
    }
  });

  const texts = [];
  cells.each((j, cell) => {
    const text = $(cell).text().trim();
    if (text) {
      texts.push(text);
    }
  });

  if (texts.length === 1 && texts[0].includes('보존') && !images.length) {
    currentSection = {
      heading: texts[0],
      paragraphs: [],
      images: []
    };
    sections.push(currentSection);
    return;
  }

  if (!currentSection) {
    currentSection = {
      heading: "서론",
      paragraphs: [],
      images: []
    };
    sections.push(currentSection);
  }

  if (images.length > 0 || texts.length > 0) {
    const paragraphText = texts.join(' | ');
    if (paragraphText) {
      currentSection.paragraphs.push(paragraphText);
    }
    
    images.forEach(imgSrc => {
      currentSection.images.push({
        url: imgSrc,
        alt: texts[0] || '성경 보존 자료',
        caption: paragraphText
      });
    });
  }
});

fs.writeFileSync('/parsed_data.json', JSON.stringify(sections, null, 2));
console.log('Done');
