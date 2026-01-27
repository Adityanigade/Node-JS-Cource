import express from 'express';
const app= express();

app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')



    app.get("/users",(req,resp)=>{
        const users=['Aditya','Avdhut','Somesh','Rohit','Vishnu']
        resp.render('users-38',{users:users, isLogin:true})
        //in given we pass condition is true so in ejs if condition work , when we pass false then else condition run
    })



app.listen(4200);