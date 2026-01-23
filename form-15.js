// load a html data in js not created separate html file 

// const http=require('http');
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{"Content-Type":'text/html'})

//     console.log(req.url);

//     if (req.url=='/') {
//         resp.write(`
//     <form action="/submit" method="post">
//     <input type="text" placeholder="enter name" name='name'/>
//     <input type="text" placeholder="enter email" name='email'/>
//     <button>Submit</button>

//     </form>
//     `);
//     }
//     else if(req.url=='/submit'){
//         resp.write('<h1>Data Submitted</h1>')
//     }

// resp.end();
// }).listen(4300);

// ===========================================================================

// now load html data with creating separate html file 

const http = require('http');
const fs = require('fs');

http.createServer((req,resp)=>{

fs.readFile('html/form-15.html','utf-8',(error,data)=>{
   
    if(error){
         resp.writeHead(500,{"Content-Type":'text/plain'})
        resp.end('Internal Server Error')

        return;
    }
resp.writeHead(200,{"Content-Type":'text/html'})

    if (req.url=='/') {
        resp.write(data);
    }
    else if(req.url=='/submit'){
        resp.write('<h1> Data Successfully Submitted</h1>')
    }
    resp.end();
})

}).listen(4300);