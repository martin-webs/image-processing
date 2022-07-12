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


  