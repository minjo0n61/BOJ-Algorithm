const input = require('fs').readFileSync("/dev/stdin").toString().split("\n");
let num = +input[0];
let car = input[1].split(" ").map(Number);
let count = 0;

for (let i = 0; i < 5; i++) {
    if (car[i] === num) {
        count++;
    }
}
console.log(count);