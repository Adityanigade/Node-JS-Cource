import { userList } from "../model/userModel-39.js"

export function handleUser (req,resp){
    const userData = userList();            // userList come from model 
    resp.render('user-39',{users:userData})
}