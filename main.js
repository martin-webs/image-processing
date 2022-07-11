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
  // zipFilePath = `${__dirname}/myfile.zip`,
  zipFilePath = process.argv[2] || `${__dirname}/myfile.zip`,
  pathUnzipped = process.argv[3] || `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;

unzip(zipFilePath, pathUnzipped)
  .then((pathToRead) => readDir(pathToRead))
  .then(files => {
    for(const file of files) {
      grayScale(file, `${pathProcessed}/${files.indexOf(file)}.png`);
    }
  })
  .catch((err) => console.error('There was an error, please check this out: \n\n', err));


  