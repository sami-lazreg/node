var fs = require("fs");

var data = fs.readFileSync(`${process.argv[2]}`);

let a=data.toString().split('\n')
console.log(a.length-1)
