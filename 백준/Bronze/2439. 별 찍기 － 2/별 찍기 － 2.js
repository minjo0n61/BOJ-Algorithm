const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const testCase = Number(input);
let answer = '';

for (let i = 1; i <= testCase; i++) {
    answer += " ".repeat(testCase - i) + "*".repeat(i) + "\n";
}
console.log(answer);