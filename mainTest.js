const { grayScale } = require('./test1');
grayScale('./unzipped/in.png', './grayscaled/out.png').then((msg) => console.log(msg)).catch((err) => console.log(err));