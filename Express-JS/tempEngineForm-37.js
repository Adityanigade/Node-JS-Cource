import express from 'express';
const app= express();

app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')


app.get('/',(req,resp)=>{
    resp.render('homePage-37')
})

app.get('/add-user',(req,resp)=>{
resp.render('addUser-37')
})

app.post('/submit-user',(req,resp)=>{
    console.log(req.body);
    
    resp.render('submitUser-37',req.body)
    })



app.listen(4200);