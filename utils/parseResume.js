const pdfParse = require('pdf-parse');

async function parseResume(buffer) {
  const data = await pdfParse(buffer);
  return data.text;
}

module.exports = { parseResume };
