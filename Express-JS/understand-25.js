const express = require('express');

 const app = express();


// also we create like that

// const express = require('express')(); 

// to check all function

// console.log(app); 


app.get("",(req,resp)=>{
    resp.send("<h1> Home Page</h1>")
})

app.get("/about",(req,resp)=>{
    resp.send("<h1> About Page</h1>")
})


app.listen(3200)