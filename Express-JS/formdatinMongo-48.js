import express from 'express'
import { MongoClient } from 'mongodb'



const dbName="school"
const url ="mongodb://localhost:27017"
const client=new MongoClient(url)




const app = express();
app.use(express.urlencoded({extended:true}))
app.set("view engine",'ejs')   // when you pass data to ui using ejs then this line requred

// first way to create route

client.connect().then((connection)=>{
    const db =connection.db(dbName);


    app.get("/add",(req,resp)=>{
    resp.render('add-student-48')
    })

     app.post("/add-student",async (req,resp)=>{
       // console.log(req.body);
        
         const collection = db.collection('students');
         const result =await collection.insertOne(req.body)
         console.log(result);
         
        // const students = await collection.find().toArray();
        // resp.send(students)
        resp.send("data saved")
    })
})




// second way to create route

// app.get("",async (req,resp)=>{
// await client.connect()
// const db = client.db(dbName);
// const collection = db.collection('students')
// const students = await collection.find().toArray()
// console.log(students);
// resp.render('student-46',{students})
// })

app.listen(4200);