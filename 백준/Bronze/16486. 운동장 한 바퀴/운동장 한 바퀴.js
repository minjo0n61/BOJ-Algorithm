const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split("\n").map(Number);
let num = input[0] * 2 + input[1] * 2 * 3.141592;
console.log(num);