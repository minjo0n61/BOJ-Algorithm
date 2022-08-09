const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
let R1 = Number(input[0]);
let S = Number(input[1]);

console.log(2*S-R1);