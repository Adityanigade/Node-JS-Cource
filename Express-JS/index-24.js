const express = require('express');

const app = express();
app.get("/",(req,resp)=>{
    resp.send("<h1> Welcom on Express Home Page</h1>")
});

app.get("/about",(req,resp)=>{
    resp.send("<h1> Welcom on Express About Page </h1>")
});

app.get("/contact",(req,resp)=>{
    resp.send("<h1> Welcom on Express Contact Page </h1>")
});

app.get("/services",(req,resp)=>{
    resp.send("<h1> Welcom on Express Services Page </h1>")
});

app.listen(4100)