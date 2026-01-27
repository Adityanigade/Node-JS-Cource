import express from 'express';
import { handleUser } from './controller/userController-39.js';
const app = express();

app.set('view engine','ejs')
app.get("/users",handleUser)  // handleUser functuion create in controller part and give to control request


app.listen(4400);