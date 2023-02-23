const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    const path = require('path');
   // const _dirname = require('_dirname')
    if(url === '/') {
        const filePath = path.join(__dirname,"message.txt");

        fs.readFile(filePath,{ encoding: "utf-8"},(err,data) => {

            console.log(`data from file` + data);
            res.setHeader('Content-Type','text/html');
            res.write('<html>');
            res.write('<header><title>My First Page</title><head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST" ><input type="text" name="message" ><button type="submit">Send</button> </form></body>');
            res.write('</html>');
            return res.end();

        })
        

    }
    else if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message,err => {
                console.log(`indise fs.writefile`);
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
        

    }
    else{
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<header><title>My First Page</title><head>');
        res.write('<body><h1>Hello from my Node.js server!</h1></body>');
        res.write('</html>');
        res.end();
    }
})

server.listen(4000);