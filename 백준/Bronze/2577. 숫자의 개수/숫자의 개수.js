const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
let num = (input[0] * input[1] * input[2]).toString();

let answer = '';
for (let i = 0; i <= 9; i++) {
    let count = 0;
    for (let j = 0; j < num.toString().length; j++) {
        if (Number(num[j]) === i) count++;
    }
    answer += count + "\n";
    count = 0;
}
console.log(answer.trim());