const input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
let arr = [];
for (let i = 0; i < 3; i++) {
    arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);
console.log(arr[1]);