import express from 'express';
import apiDatas from './apiData-41.json' with { type: 'json' };
const app = express();


app.get("/",(req,resp)=>{
    console.log(apiDatas);
    
    resp.send(apiDatas)
})

// find data by id
app.get("/userid/:id",(req,resp)=>{
    const id =req.params.id;
    console.log(id);
let filteredData = apiDatas.filter((user)=>user.id==id)
     resp.send(filteredData)
})

//find data by name
app.get("/username/:name",(req,resp)=>{
    const name =req.params.name;
    console.log(name);
let filteredData = apiDatas.filter((user)=>user.name.toLowerCase()==name.toLowerCase())
     resp.send(filteredData)
})


app.listen(3500);