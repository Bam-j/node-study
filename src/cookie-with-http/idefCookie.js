const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');
const parseCookies = (cookie = '') => {
    cookie.split(';').map(v => v.split('=')).reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    }, {});
};

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);

    if (req.url.startsWith('/submit')) {
        const {query} = url.parse(req.url);
        const {name} = qs.parse(query);
        const expires = new Date();

        expires.setMinutes(expires.getMinutes() + 3);

        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toString()}; HttpOnly; Path=/`,
        });
        res.end();
    }
    else if (cookies.name) {
        try {
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
            res.end(`${cookies.name}님입니다.`);
        }
        catch (e) {
            res.writeHead(500, {'Content-Type': 'text/plain; charset=utf8'});
            res.end(e.message);
        }
    }
    else {
        try {
            const data = await fs.readFile('./idefCookie.html').catch(e => {
                console.log(e.message);
            });

            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
            res.end(data);
        }
        catch (e) {
            res.writeHead(500, {'Content-Type': 'text/plain; charset=utf8'});
            res.end(e.message);
        }
    }
}).listen(8080);