const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let inputs = input[0].split(" ");
const testCase = Number(inputs[0]);
const limit = Number(inputs[1]);
let answer = '';
let A = input[1].split(" ");

for (let i = 0; i < testCase; i++) {
    if (A[i] < limit) {
        answer += A[i] + " ";
    }
}
console.log(answer);