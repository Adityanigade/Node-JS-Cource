import express from "express"
import morgan from 'morgan'
const app = express();


app.use(morgan('dev'))
app.get("/",(req,resp)=>{
    resp.send("Home Page")
});

app.get("/users",(req,resp)=>{
    resp.send("Users Page")
});

app.get("/wait",(req,resp)=>{
   setTimeout(()=>{
     resp.send("Result after 1 minute")
   },1000);
});


app.listen(3200);