import express from "express";
import path from 'path';
const app = express();

app.get("/",(req , resp)=>{
    const absPath =path.resolve('html/home-28.html')
    resp.sendFile(absPath)
})

app.get("/login",(req , resp)=>{
    const absPath =path.resolve('html/login-28.html')
    resp.sendFile(absPath)
})

app.get("/about",(req , resp)=>{
    const absPath =path.resolve('html/about-28.html')
    resp.sendFile(absPath)
})
app.listen(4500)