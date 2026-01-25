const fs = require('fs');
const os = require('os')

fs.writeFileSync("dummy.txt","tryning with modules")

console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());

// given is code modules which are by default present


// some global object

console.log("abc");
console.log(process.cwd());
console.log(process.pid);



