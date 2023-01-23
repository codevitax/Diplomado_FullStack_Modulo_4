const file1 = require("./file1");
const file2 = require("./file2");
const fs = require("fs");
console.log("1")
fs.readFile("./sample.txt", "utf-8", (err, data) => {
    console.log("3");
    if(err){
        console.log("error");
    }else{
        console.log(data);
    }
});

console.log("2");