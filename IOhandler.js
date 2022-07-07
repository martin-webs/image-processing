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

const read = (path) => {
	fs.readdir(path);
}
/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {string} path
 * @return {promise}
 */

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
  // readDir,
  // grayScale,
	read
};
