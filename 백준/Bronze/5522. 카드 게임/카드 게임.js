const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(Number);
let sum = 0;

for (let i = 0; i < input.length; i++) {
    sum += input[i];
}
console.log(sum);