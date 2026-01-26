import express from 'express'
const app = express();


app.set('view engine', 'ejs')
app.get("/",(req,resp)=>{
    resp.render('home-36.ejs',{name:'Aditya Deshmukh',email:'aditya@21gmail.com'})
})


app.listen(3100);