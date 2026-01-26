import express from 'express';
import home from './pages/home-26.js';
import about, { contact } from './pages/about-26.js';

const app = express();

app.get("",(req,resp)=>{
    resp.send(home())
})

app.get("/about",(req,resp)=>{
    resp.send(about())
})

app.get("/contact",(req,resp)=>{
    resp.send(contact())
})

app.listen(4600);