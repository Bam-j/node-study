const http = require('http');

http.createServer((req, res) => {
    console.log(req.headers.cookie);

    res.writeHead(200, {'Set-Cookie': 'firstCookie=Hello Cookie!'});
    res.end();
}).listen(8080);