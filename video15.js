const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('In the middleware!');
    next();
});

app.use((req,res,next) => {
    console.log('In the another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer() ;

server.listen(3000);