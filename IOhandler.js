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
  fsSync = require('fs'),
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
  if (fsSync.existsSync(pathIn)) {
    return createReadStream(pathIn)
      .pipe(unzipper.Extract({ path: pathOut }))
      .promise()
      .then(() => pathOut)
      .catch((err) => console.log('Error from unzip:', err));
  } else {
    console.log('Zip file does not exist in the given path');
  }
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {string} path
 * @return {promise}
 */
const readDir = (dir) => {
  if (!fsSync.existsSync(dir) || typeof dir === undefined) {
    throw new Error('Directory does not exist');
  }
  return fs
    .readdir(dir)
    .then((files) => {
      const filesArr = files
        .map((file) => path.join(dir, file))
        .filter((file) => path.extname(file) === '.png');
      console.log(filesArr);
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
const grayScale = (pathIn, pathOut) => {};

module.exports = {
  unzip,
  readDir,
  // grayScale,
};
