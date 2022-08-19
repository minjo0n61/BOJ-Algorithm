const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
const testcase = BigInt(input[0]);
let arr = [];
for (let i = 1; i <= testcase; i++) {
    arr.push(input[i]);
}
arr.sort((a, b) => a - b);
let answer ='';
for (let i = 0; i < arr.length; i++) {
    answer += arr[i]+"\n";
}
console.log(answer);