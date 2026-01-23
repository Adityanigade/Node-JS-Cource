const http =require('http');
const usersdata =[
    {
        name:'Aditya',
        age:24,
        email:'aditya21@gmail.com'
    },
     {
        name:'Somesh',
        age:24,
        email:'somesh@gmail.com'
    },
     {
        name:'Avdhut',
        age:24,
        email:'avdhutgmail.com'
    },
     {
        name:'Rohit',
        age:24,
        email:'rohitgmail.com'
    }
]
http.createServer((req,resp)=>{
    resp.setHeader("Context-Type",'application/json')
    resp.write(JSON.stringify(usersdata));

resp.end();
}).listen(5200);