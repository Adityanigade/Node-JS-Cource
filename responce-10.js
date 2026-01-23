const http =require('http');

const age=30;
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.write(`
        <html>
        <head>
        <title>Server-Client Responce</head>
        </head>
        <body>
        <h1> Hello Aditya Niagde </h1>
        <h2>`+age+`</h2>
        <h2>`+new Date()+`</h2>
        </body>
        </html>
        `);
resp.end();
}).listen(5000);