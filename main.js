/*
 * Project: COMP1320 Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date:
 * Author:
 *
 */

const { unzip, readDir, grayScale } = require('./IOhandler'),
  // fs = require('fs'),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;

unzip(zipFilePath, pathUnzipped)
  .then((pathToRead) => readDir(pathToRead))
  .then(files => files.forEach(file => grayScale(file, pathProcessed)))
  .catch((err) => console.log('Error from main.js: ', err));

// grayScale('./unzipped/in.png', pathProcessed)
