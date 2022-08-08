const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
let sum = 0;
let arr = [];

for (let i = 0; i < 3; i++) {
    arr.push(input[i]);
}
let burger = Math.min(...arr);
arr = [];
for (let i = 3; i < 5; i++) {
    arr.push(input[i]);
}
let drink = Math.min(...arr);
sum = burger + drink;
console.log(sum - 50);