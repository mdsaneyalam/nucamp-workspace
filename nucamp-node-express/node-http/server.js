const http = require('http');

const hostname = 'localhost';
const port = 3000;

const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    if(req.method === 'GET'){
        let fileURL = req.url;
        if(fileURL === '/'){
            fileURL = '/index.html';
        }

        const filePath = path.resolve('./public' + fileURL);
        const fileExt = path.extname(filePath);
        if(fileExt === '.html'){
            fs.access(filePath, err => {
                if(err){
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(`<html><body><h1>Error 404: ${fileURL} is Not Found. </h1></body></html>`);
                    return;
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');

                fs.createReadStream(filePath).pipe(res);
            });

        }else{
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Error 404: ${fileURL} is Not a HTML file.</h1></body></html>`);
        }

    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'Text/html');
        res.end(`<html><body><h1>Error 404: ${req.method} is Not Supported. </h1></body></html>`);
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})


// console.log(req.headers);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body><h1>Hello World!! </h1></body></html>');