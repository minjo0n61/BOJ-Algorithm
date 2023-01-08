const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);
let AB = (input[0]).toString() + (input[1]).toString();
let CD = (input[2]).toString() + (input[3]).toString();

console.log(parseInt(AB) + parseInt(CD));