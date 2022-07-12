/*
 * Project: COMP1320 Milestone 1
 * File Name: main.js
 * Description: Main file that will unzip, read and process png files
 * Created Date: June 30, 2022
 * Author: Martin Perez
 *
 */

const { unzip, readDir, grayScale } = require('./IOhandler'),
  zipFilePath = process.argv[2] || `${__dirname}/myfile.zip`,
  pathUnzipped = process.argv[3] || `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;

unzip(zipFilePath, pathUnzipped)
  .then((pathToRead) => readDir(pathToRead))
  .then(files => {
    for(const file of files) {
      grayScale(file, `${pathProcessed}/grayscaled_${files.indexOf(file)+1}.png`);
    }
  })
  .catch((err) => console.error('Please check this out: \n\n', err));


  