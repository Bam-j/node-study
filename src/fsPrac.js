const fsPrac = require('src/fsPrac').promises;

fsPrac.readFile('./src/hello.txt')
.then(data => {
    console.log(data.toString());
})
.catch(error => {
    console.error(error);
});