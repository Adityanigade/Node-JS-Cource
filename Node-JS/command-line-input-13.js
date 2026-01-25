const http = require('http');

const arg=process.argv;

//console.log(arg);

 const port = arg[2];

http.createServer((req,resp)=>{
    resp.write('testing input from cmd')
    resp.end()
// }).listen(7200);
}).listen(port);






