//ex og js

// console.log("Apple1");

// setTimeout(()=>{
//     console.log("Apple2");
// },2000);

// console.log("Apple3");
// console.log("Apple4");



// ex of node
 const fs = require('fs');

 //Async

// fs.readFile("text/text1.txt","utf-8",(error,data)=>{
//     if (error) {
//         return false
//     }
//     console.log(data);
    
// })


//Sync

const data = fs.readFileSync("text/text1.txt","utf-8",);
console.log(data);

console.log("end Script");

