const https = require('https');

https.get('https://seomusick.kr', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const colorRegex = /#[0-9a-fA-F]{3,6}|rgba?\([^)]+\)/g;
    const colors = data.match(colorRegex);
    console.log('Found colors:', [...new Set(colors)]);
    
    // Also print some of the style tags to see the theme
    const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    let match;
    while ((match = styleRegex.exec(data)) !== null) {
      console.log('Style block:', match[1].substring(0, 500));
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
