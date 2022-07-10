/*
 * Project: Image Processing
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 *
 * Created Date: June 30, 2022
 * Author: Martin Perez
 *
 */

const unzipper = require('unzipper'),
  // fsSync = require('fs'),
  fs = require('fs').promises,
  { createReadStream, createWriteStream } = require('fs'),
  PNG = require('pngjs').PNG,
  path = require('path');

/**
 * Description: decompress file from given pathIn, write to given pathOut
 *
 * @param {string} pathIn
 * @param {string} pathOut
 * @return {promise}
 */
const unzip = (pathIn, pathOut) => {
  // if (!fsSync.existsSync(pathIn)) {
  //   console.log('Zip file does not exist in the given path');
  // }
  return createReadStream(pathIn)
    .pipe(unzipper.Extract({ path: pathOut }))
    .promise()
    .then(() => pathOut)
    .catch((err) => console.log('Error from unzip:', err));
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {string} path
 * @return {promise}
 */
const readDir = (dir) => {
  return fs
    .readdir(dir)
    .then((files) => {
      const filesArr = files
        .map((file) => path.join(dir, file))
        .filter((file) => path.extname(file) === '.png');
      // console.log(filesArr);
      return filesArr;
    })
    .catch((err) => console.log('Error from readDir:', err));
};

/**
 * Description: Read in png file by given pathIn,
 * convert to grayscale and write to given pathOut
 *
 * @param {string} filePath
 * @param {string} pathProcessed
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {
  return new Promise((resolve, reject) => {
    //   // .then(() => {
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
    });

    src.pipe(png);

    // resolve('Grayscale conversion successful');
  });
  // .catch((err) => console.log('Error from readFile:(YEY!)', err));
};

module.exports = {
  unzip,
  readDir,
  grayScale,
};
