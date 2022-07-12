const path = require('path');
const { grayScale } = require('./test1');

let imgArr = ['./grayscaled/newout1.png', './grayscaled/newout2.png']
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

myPromise
  .then(() => console.log('Success 2'))
  .then(() => {
  })
  .then(() => console.log('Success 3'))
  .catch((err) => console.log(err));
