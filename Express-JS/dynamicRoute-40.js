import express from 'express';
const app = express();

// create a links
app.get("/",(req,resp)=>{
    const users=['aditya','somesh','rohit','vishnu','avdhut']
    const upper = users.map(users=> users.toUpperCase())    // pass array element in upper case
    let data =``;
    for (let i= 0; i < upper.length; i++) {
    data+=`<ul><li> <a href="user/${upper[i]}">${upper[i]}</a> </li></ul>`
  // console.log(upper[i]);
       }
   resp.send(data)
})

//create routes
app.get("/user/:name",(req,resp)=>{
 // console.log(req.params.name);
const userName=req.params.name;
resp.send(`This is ${userName}'s profile page`)
})

app.listen(3200);




