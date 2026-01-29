import express from 'express'
import { MongoClient } from 'mongodb'



const dbName="school"
const url ="mongodb://localhost:27017"
const client=new MongoClient(url)




const app = express();
app.set("view engine",'ejs')   // when you pass data to ui using ejs then this line requred

// first way to create route

client.connect().then((connection)=>{
    const db =connection.db(dbName);

    app.get("/api",async (req,resp)=>{
        const collection = db.collection('students');
        const students = await collection.find().toArray();
        resp.send(students)
    })

     app.get("/ui",async (req,resp)=>{
        const collection = db.collection('students');
        const studentsData = await collection.find().toArray();
        resp.render('students-47',{studentsData})
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