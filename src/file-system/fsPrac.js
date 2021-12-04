const fs = require('fs').promises;

fs.readFile('./src/file-system/hello.txt')
.then(data => {
    console.log(data.toString());
})
.catch(error => {
    console.error(error);
});