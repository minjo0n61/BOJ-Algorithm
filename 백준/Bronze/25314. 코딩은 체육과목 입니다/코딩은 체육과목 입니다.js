const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let num = +input;
let count = Math.ceil(num / 4);

console.log("long ".repeat(count) + "int");