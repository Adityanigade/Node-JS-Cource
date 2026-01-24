
const http = require('http');
const fs = require('fs');
// querystring for convert chunks in readable from
const queryString = require('querystring')

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
        // for collect the submited data ,submited data in from of chunks
        let dataBody=[];
        req.on('data',(chunk)=>{
              dataBody.push(chunk);
        });
        req.on('end',()=>{
            // end event use with buffer class to concat the chunks
            let rowData = Buffer.concat(dataBody).toString();
            // quarystring are used to convert data into readable from
            let readableData = queryString.parse(rowData);
            let dataString = "My Name is "+ readableData.name + " and my Email is "+ readableData.email;
            console.log(dataString);

            // using sync
            fs.writeFileSync("text.data-17"+readableData.name+".txt",dataString);
        console.log("File Created");


        // using async
        
        // fs.writeFile("text/data-17.txt"+readableData.name+".txt",dataString,'utf-8',(err)=>{
        //     if (err) {
        //         resp.end("Internal server error")
        //         return false;
        //     }else{
        //                 console.log("File Created");
        //     }
        // })

            
        })
        resp.write('<h1> Data Successfully Submitted</h1>')
    }
    resp.end();
})

}).listen(4300);