const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let total = Number(input[0]);
let type = Number(input[1]);
let answer = 0;

for (let i = 2; i < input.length; i++) {
    let line = input[i].split(" ");
    let price = Number(line[0]);
    let count = Number(line[1]);
    answer += price * count;
}

console.log(answer === total ? "Yes" : "No");