const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
let arr = [];
let fullarr = [];

for (let i = 1; i <= 30; i++) {
    fullarr.push(i);
}
arr = fullarr.filter(x => !input.includes(x));
arr = arr.sort((a, b) => a - b);
console.log(arr[0]);
console.log(arr[1]);