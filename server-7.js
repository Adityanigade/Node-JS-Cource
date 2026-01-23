// const http = require('http');
// http.createServer().listen(6000); 

// on place 6000 you can write any port no



const http =require('http');
http.createServer((req,resp)=>{
    resp.write("<h1> Aditya Nigade </h1>");
resp.end("Hello Adi");
}).listen(4800);



// const http = require('http');
// http.createServer((req,resp)=>{
//     resp.write("<h1>Somesh</h1>");
//     resp.end("<h1> More</h1>");
// }).listen(5800);