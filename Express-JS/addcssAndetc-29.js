import express from "express";
import path from 'path';
const app = express();
const absPath =path.resolve('html')

const publicPath = path.resolve('public')
app.use(express.static(publicPath));

app.get("/",(req , resp)=>{
      resp.sendFile(absPath + '/home-29.html')
})

app.get("/login",(req , resp)=>{
    resp.sendFile(absPath + '/login-29.html')
})

app.listen(5500)