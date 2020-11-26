const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.write('HOME');
        res.end()
    } else if (req.url == '/api') {
        const readstream = fs.createReadStream('example.json');
        res.writeHead(200, { 'Content-type': 'application/json' });
        readstream.pipe(res);
        //res.end()
    } else if (req.url == '/1.jpg') {
        const readstream = fs.createReadStream('1.jpg');
        res.writeHead(200, { 'Content-type': 'image/png' });
        readstream.pipe(res);
        //res.end()
    }

    }).listen('3000');
