import express from 'express';
const app = express();



app.get("/",(req,resp)=>{
    resp.send("Home Page")
})

app.get("/users",(req,resp)=>{
    resp.send("Users Page")

    //for error occurance cheeck
    // resp.send1("Users Page")
})

app.get("/error",(req,resp)=>{
const error = new Error('')
error.status=404;
next(error)
//resp.send("Users Page")
})

app.get("/login",(req,resp)=>{
    resp.send("Login Page")
})

// 1st way to create function
// function errorHandling(error,req,resp,next) {
//     resp.send(error.status || 500).send("Try after some time")
// }
// app.use(errorHandling)

// second way create function
app.use((error,req,resp,next)=> {
    resp.send(error.status || 500).send("Try after some time")
})


app.listen(4100);
