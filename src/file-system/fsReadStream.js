const fs = require('fs');
const readStream = fs.createReadStream('./src/file-system/hello.txt', {highWaterMark: 4});
const data = [];

readStream.on('data', chunk => {
    data.push(chunk);
    console.log(chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('result: ', Buffer.concat(data).toString());
});

readStream.on('error', err => {
    console.error(err);
});