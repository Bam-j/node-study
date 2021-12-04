const fs = require('fs');
const writeStream = fs.createWriteStream('./src/file-system/hello.txt');

writeStream.write('Write Stream으로 쓰여진 문장\n');
writeStream.end();