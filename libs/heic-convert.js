const { promisify } = require('util');
const fs = require('fs');
const convert = require('heic-convert');
const sharp = require('sharp');

(async () => {
  const outputBuffer = await convert({
    buffer: fs.readFileSync('./assets/sample1.heic'),
    format: 'JPEG',
    quality: 1,
  });
  // await promisify(fs.writeFile)('./assets/qaungac.jpg', outputBuffer);
  await sharp(outputBuffer).rotate(180).toFile('./assets/sample1.jpg');
})();
