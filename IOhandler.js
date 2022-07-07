/*
 * Project: Image Processing
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 *
 * Created Date: June 30, 2022
 * Author: Martin Perez
 *
 */

const unzipper = require('unzipper');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const path = require('path');

/**
 * Description: decompress file from given pathIn, write to given pathOut
 *
 * @param {string} pathIn
 * @param {string} pathOut
 * @return {promise}
 */
const unzip = (pathIn, pathOut) => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(pathIn)) {
      return reject(`\nFile  ---> '${pathIn}' does not exist.`);
    }
    fs.createReadStream(path.join(__dirname, pathIn)).pipe(
      unzipper.Extract({ path: path.join(__dirname, pathOut) })
    );
    resolve();
  });
};

unzip('./assets/myfile.zip', './assets/unzipped')
  .then(() => console.log('File unzipped successfully'))
  .catch((err) => console.log('There was an error:', err));
/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {string} path
 * @return {promise}
 */
const readDir = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        if (err.code == 'ENOENT') {
          reject(`\nDirectory --> '${dir}' does not exist.`);
        } else {
          reject('Something went wrong:', err);
        }
      }
      resolve(files);
      return
    });
  });
};

readDir('./assets/unzipped')
  .then((files) => {
    const filesArr = files.map(file =>
    path.join('assets/unzipped', file))
        // .filter(files => files.endsWith('.png'))
        .filter(file => path.extname(file) ==='.png')
    return filesArr;
    })
  .then((filesArr) => console.log(filesArr))
  .catch((err) => console.log('\nThere was an error:', err + '\n'));

/**
 * Description: Read in png file by given pathIn,
 * convert to grayscale and write to given pathOut
 *
 * @param {string} filePath
 * @param {string} pathProcessed
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {};

module.exports = {
  // unzip,
  readDir,
  grayScale,
};
