const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = req.url === '/' ? 'index.html' : req.url;
    filePath = path.join(__dirname, filePath);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(8000, '0.0.0.0', () => {
    console.log('Server running at http://10.10.50.231:8000');
});
