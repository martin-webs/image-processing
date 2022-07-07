/*
 * Project: COMP1320 Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date:
 * Author:
 *
 */

const { readDir } = require('./IOhandler');
// const IOhandler = require("./IOhandlerx"),
const { unzip } = require('./IOhandler'),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;

unzip(zipFilePath, pathUnzipped)
  .then((pathToRead) => readDir(pathToRead))
  .catch((err) => console.log('Error from main.js: ', err));

