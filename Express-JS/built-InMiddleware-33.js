import express from 'express'
import path from 'path'

const app= express();


app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));


app.get("",(req,resp)=>{
    const filePath= path.resolve('html/home-33.html')
    resp.sendFile(filePath)
})

app.get("/login",(req,resp)=>{
    resp.send(`<form action="/submit" method="post">
        <input type="text" placeholder="enter name" name="name"/>
         <input type="text" placeholder="enter password" name="password" />
         <button>Login</button>
        </form>`)
})

app.get("/users",(req,resp)=>{
    resp.send("Users Page")
})

app.post("/submit",(req,resp)=>{
    console.log("User Login Details : " + req.body);
    
    resp.send("Submit Page")
})



app.listen(4000);