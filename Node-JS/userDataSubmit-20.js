
const quarystring = require('querystring')
function userDataSubmit(req,resp){
let dataBody =[];
req.on('data',(chunk)=>{
    dataBody.push(chunk);
});

req.on('end',()=>{
    let rowData = Buffer.concat(dataBody).toString();
    let readableData = quarystring.parse(rowData);
    let dataString= "My name is " + readableData.name + " my email is " + readableData.email;
    console.log(dataString);
    
})
    resp.write(`
        
     <h1>You can get data from user form here </h1>

   
        `)
}
module.exports=userDataSubmit;