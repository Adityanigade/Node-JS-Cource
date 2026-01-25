const http= require('http');
const usreFormm = require('./userForm-20');
const userDataSubmit= require('./userDataSubmit-20');

http.createServer((req,resp)=>{

    resp.writeHead(200,{"content-type":'text/html'})

if (req.url=="/") {
    usreFormm(req,resp)
}else if (req.url=="/submit") {
   userDataSubmit(req,resp)
}

resp.end()
}).listen(3200);