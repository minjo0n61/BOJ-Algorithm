const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(el => +el);
let answer = ((input[0] + 1) * (input[1] + 1) / (input[2] + 1) - 1);
console.log(parseInt(answer));