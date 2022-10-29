const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split(" ").map(Number);
let A = input[0];
let B = input[1];
console.log((B - A) + " " + B);