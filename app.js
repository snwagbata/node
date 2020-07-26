const http = require('http');
const qs = require('querystring');

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' & req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hello World, Welcome to WeJapa Internships</h1>');

    } else if (req.method === 'POST' & req.url === '/') {
        let body = '';
        req.on('data', (d) => {
            body += d;
        })
        req.on('end', (p) => {
            let post = qs.parse(body);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<h1>Hello ${post['name']}, Welcome to WeJapa Internships</h1>`);
        })

    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>404. Japa from here</h1>')
    }
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})