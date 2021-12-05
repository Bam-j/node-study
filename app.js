const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');

nunjucks.configure('views', {
    express: app,
    watch: true,
});

app.listen(app.get('port'), () => {
    console.log('포트 번호: ', app.get('port'));
});