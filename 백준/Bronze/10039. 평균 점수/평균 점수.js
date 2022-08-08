const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let sum = 0;

for (let i = 0; i < input.length; i++) {
    if (+input[i] < 40) { input[i] = 40 }
    sum += +input[i];
}
console.log(sum / 5);