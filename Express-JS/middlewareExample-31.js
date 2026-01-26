import express from 'express'
const app = express();

// make a middleware for age check

// function ageCheck(req,resp,next){
// if (!req.query.age || req.query.age<18) {
//     resp.send("Alert ! You are not access this page")
// }
// else{
//     next();
// }
// }
// app.use(ageCheck);


// check ip and also using if condition you can block any ip

function ipCheck(req,resp,next){
  const ip =req.socket.remoteAddress
    console.log(ip);
    
if (ipCheck.includes('ip address')) {
    resp.send("Alert ! You are not access this page")
}
else{
    next();
}
}
app.use(ipCheck);



app.get("/",(req,resp)=>{
resp.send("This is Home Page")
})

app.get("/login",(req,resp)=>{
resp.send("This is Login Page")
})

app.get("/admin",(req,resp)=>{
resp.send("This is Admin Page")
})


app.listen(4700);