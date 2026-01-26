import express from "express";
const app = express();

// write function for middle ware == write function 2 type 
// function checkRoute(req,resp,next) {
//     console.log(" User is Accesing " + req.url + " Page ");
//     next();
//     }
// app.use(checkRoute);


// second way to write function short way
app.use((req,resp,next)=> {
     console.log(" User is Accesing " + req.url + " Page ");
     next();
    });


app.get("/",(req,resp)=>{
    resp.send("Home Page")
})

app.get("/users",(req,resp)=>{
    resp.send("users Page")
})

app.get("/products",(req,resp)=>{
    resp.send("products Page")
})


app.listen(4200)