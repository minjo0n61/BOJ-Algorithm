const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let answer = [];

for (let i = 0; i < input.length; i++) {
    if (answer.includes(input[i] % 42) === false) {
        answer.push(input[i] % 42);
    }

}
console.log(answer.length);