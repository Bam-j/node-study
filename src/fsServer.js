const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./src/fsServer.html');

        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        res.end(data);
    }
    catch (err) {
        console.error(err);
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        res.end(err.message);
    }
}).listen(8080);