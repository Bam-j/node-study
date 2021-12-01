const http = require('http');

//변경 전
http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    res.write('<p>Hello world!</p>');
    res.end('<p>Hello world?</p>');
})
    .listen(8081, ()=>{
        console.log('8081 port');
    });

//이벤트 리스너 형식
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    res.write('<p>Hello world!</p>');
    res.end('<p>Hello world?</p>');
});

server.listen(8080);

server.on('listening', ()=>{
    console.log('8080 port');
});