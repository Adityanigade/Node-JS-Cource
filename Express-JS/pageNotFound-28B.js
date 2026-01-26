import express from "express";
import path from 'path';
const app = express();
// crate absolut path finde in  one line, now only use abspath + your file name 
 const absPath =path.resolve('html')

app.get("/",(req , resp)=>{
    resp.sendFile(absPath+"home-28A.html")
})

app.get("/login",(req , resp)=>{
    resp.sendFile(absPath+"login-28A.html")
})

app.get("/about",(req , resp)=>{
   resp.sendFile(absPath + "about-28A.html")
})

app.use((req,resp)=>{
   resp.status(404).sendFile(absPath +" error404-28B.html")
})


app.listen(4600)