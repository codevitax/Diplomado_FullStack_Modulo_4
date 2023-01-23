const file1 = require("./file1");
const file2 = require("./file2");
const fs = require("fs");
const util = require("util");


(async() => {
    const readfilePromise = util.promisify(fs.readFile);
    console.log("1");
    const data = await readfilePromise("./sample.txt", "utf-8")
    console.log(data);
    console.log("2")
})();
