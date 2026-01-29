import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const dbName = "school";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const app = express();
app.use(express.urlencoded({ extended: true })); // middleware 
app.use(express.json());                    // middleware 
app.set("view engine", "ejs"); // when you pass data to ui using ejs then this line requred

// first way to create route

client.connect().then((connection) => {
  const db = connection.db(dbName);

  // this route for show data on ui
  app.get("/ui", async (req, resp) => {
    const collection = db.collection("students");
    const studentsData = await collection.find().toArray();
    resp.render("studentDatas-50", { studentsData });
  });

  // this route for delete id using delete() method, in that we required to send or give id after that delete
  app.delete("/delete/:id", async (req, resp) => {
    console.log(req.params.id);
    const collection = db.collection("students");
    const result = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    if (result) {
      resp.send({
        message: "Student Data Deleted",
        success: true,
      });
    } else {
      resp.send({
        message: "Student Data Not Deleted, Try After Some Time",
        success: false,
      });
    }
  });

  // this route for delete id data from id on api , but we can delete data  on ui using button
  app.get("/ui/delete/:id", async (req, resp) => {
    console.log(req.params.id);
    const collection = db.collection("students");
    const result = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    if (result) {
      resp.send("<h1> student record deleted</h1>");
    } else {
      resp.send("<h1> student record not deleted</h1>");
    }
  });

  // for update data click on update button which show on ui behind that button this route  work
  app.get("/ui/student/:id", async (req, resp) => {
    const id = req.params.id;
    console.log(id);
    const collection = db.collection("students");
    const result = await collection.findOne({
      _id: new ObjectId(req.params.id),
    });
    resp.render("popUpdate-51", { result });
  });

  // update data using api from database using id
  app.get("/student/:id", async (req, resp) => {
    const id = req.params.id;
    console.log(id);
    const collection = db.collection("students");
    const result = await collection.findOne({
      _id: new ObjectId(req.params.id),
    });
    resp.send({
      message: "Data fetch",
      success: true,
      result: result,
    });
  });

  // for update route work and update from form on ui-lec 52
  app.post("/ui/update/:id", (req, resp) => {
    console.log(req.body);
    console.log(req.params.id);

    const collection = db.collection("students");
    const filter = { _id: new  ObjectId(req.params.id) };
    const update = { $set: req.body };
    const result = collection.updateOne(filter,update);

    if (result) {
      resp.send("Data Updated");
    } else {
      resp.send("Data Not Updated");
    }
  });

// update from api - lec 52
 app.put("/update/:id", (req, resp) => {
    console.log(req.body);
    console.log(req.params.id);

    const collection = db.collection("students");
    const filter = { _id: new  ObjectId(req.params.id) };
    const update = { $set: req.body };
    const result = collection.updateOne(filter,update);

    if (result) {
     resp.send({
      message: "Data Updated",
      success: true,
      result: result,
    });
    } else {
       resp.send({
      message: "Data Not Updated",
      success: false,
      result: null,
    });
    }
  });


});

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
