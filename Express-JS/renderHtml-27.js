import express from 'express';
import renderhome from './pages/renderhome-27.js';
import renderlogin from './pages/renderlogin-27.js';
import rendersubmit from './pages/rendersubmit-27.js';
const app = express();

app.get("/",(req,resp)=>{
    resp.send(renderhome())
})

app.get("/login",(req,resp)=>{
      resp.send(renderlogin())
})

app.post("/submit",(req,resp)=>{
      resp.send(rendersubmit())
})

app.listen(3500)