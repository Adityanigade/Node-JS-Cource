import express from 'express'
import {MongoClient} from 'mongodb'



const dbName="school"
const url ="mongodb://localhost:27017"
const client=new MongoClient(url)



const app = express();

app.set("view engine",'ejs')

app.get("",async (req,resp)=>{

await client.connect()
const db = client.db(dbName);
const collection = db.collection('students')
const students = await collection.find().toArray
()
console.log(students);


resp.render('student-46',{students})
})

app.listen(4200);