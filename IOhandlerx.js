/*
 * Project: Image Processing
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 *
 * Created Date: June 30, 2022
 * Author: Martin Perez
 *
 */
unzipper = require('unzipper');
const fs = require('fs').promises;
const { createReadStream, createWriteStream } = require('fs');
const PNG = require('pngjs').PNG;
const path = require('path');

/**
 * Description: decompress file from given pathIn, write to given pathOut
 *
 * @param {string} pathIn
 * @param {string} pathOut
 * @return {promise}
 */
// const unzip = (pathIn, pathOut) => {
//   return new Promise((resolve, reject) => {
//     if (!fs.existsSync(pathIn)) {
//       return reject(`\nFile  ---> '${pathIn}' does not exist.`);
//     }
//     fs.createReadStream(pathIn).pipe(unzipper.Extract({ path: pathOut }));
//     console.log('File unzipped successfully');
//     resolve(pathOut);
//   });
// };
const unzip = (pathIn, pathOut) => {
    fs.createReadSteam(pathIn)
    .pipe(unzipper.Extract({ path: pathOut }))
    // .promise()
    // .then(() => console.log('Done'), (err) => console.log('Error:', err));
};

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
      const filesArr = files
        .map((file) => path.join(dir, file))
        .filter((file) => path.extname(file) === '.png');
      console.log(filesArr);
      resolve(filesArr);
    });
  });
};

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
  unzip,
  readDir,
  grayScale,
};
