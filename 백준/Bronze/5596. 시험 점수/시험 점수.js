const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let min = input[0].split(' ').map(Number);
let man = input[1].split(' ').map(Number);
let sum = 0;
let sum2 = 0;
for (let i = 0; i < 4; i++) {
    sum += min[i];
    sum2 += man[i];
}
console.log(Math.max(sum, sum2));