const fs = require('fs');
let  PNG = require('pngjs').PNG,
  pathOUt = './grayscaled/out.png',
  pathIn = './unzipped/in.png';


fs.createReadStream(pathIn)
  .pipe(
    new PNG({
      filterType: 4,
    })
  )
  .on("parsed", () => {
		for (let i = 0; i < this.data.length; i += 4) {
			this.data[i] = (this.data[i] + this.data[i + 1] + this.data[i + 2]) / 3;
      this.data[i + 1] =
			(this.data[i] + this.data[i + 1] + this.data[i + 2]) / 3;
      this.data[i + 2] =
			(this.data[i] + this.data[i + 1] + this.data[i + 2]) / 3;
    }
    this.pack().pipe(fs.createWriteStream(pathOUt));
  })
	.on("error", () => console.log("Error from createReadStream"));
