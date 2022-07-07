/*
 * Project: COMP1320 Milestone 1
 * File Name: main.js
 * Description: 
 * 
 * Created Date: 
 * Author:
 * 
 */

// const { readdir } = require("fs");

// const IOhandler = require("./IOhandlerx"),
const { unzip, readDir } = require("./IOhandlerx"),
  path = require("path"),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;

  unzip(zipFilePath, pathUnzipped)
  // .then((path) => readDir(path))
  .catch((err) => console.log('There was an error, file could not be unzipped:', err));

  // readDir(pathUnzipped)
  // .then((files) => {
  //   const filesArr = files.map(file =>
  //   path.join(pathUnzipped, file))
  //       // .filter(files => files.endsWith('.png'))
  //       .filter(file => path.extname(file) ==='.png')
  //   return filesArr;
  //   })
  // .then((filesArr) => console.log(filesArr))
  // .catch((err) => console.log('\nThere was an error:', err + '\n'));