const { promisify } = require('util');
const fs = require('fs');
const convert = require('heic-convert');

(async () => {
  const outputBuffer = await convert({
    buffer: fs.readFileSync('./assets/qaungac.heic'), // the HEIC file buffer
    format: 'JPEG',      // output format
    quality: 1           // the jpeg compression quality, between 0 and 1
  });

  await promisify(fs.writeFile)('./assets/qaungac.jpg', outputBuffer);
})();