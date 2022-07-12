// const fsSync = require('fs');
const fs = require('fs').promises,
  { createReadStream, createWriteStream } = require('fs'),
  PNG = require('pngjs').PNG;

const grayScale = (pathIn, pathOut) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathIn)
      .then(() => {
        let png = new PNG({ filterType: -1 });
        let src = createReadStream(pathIn);
        let dst = createWriteStream(pathOut);

        png.on('parsed', function () {
          for (let i = 0; i < this.data.length; i += 4) {
            let r = this.data[i];
            let g = this.data[i + 1];
            let b = this.data[i + 2];
            let gray = (Math.min(r, g, b) + Math.max(r, g, b)) / 2;
            this.data[i] = gray;
            this.data[i + 1] = gray;
            this.data[i + 2] = gray;
          }
          png.pack().pipe(dst);
        })
        src.pipe(png);
        resolve('Grayscale conversion successful');
      })
      .catch((err) => console.log('Error from readFile:(YEY!)', err));
  });
};

module.exports = { grayScale };
