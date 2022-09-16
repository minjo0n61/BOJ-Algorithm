const input = require('fs').readFileSync('/dev/stdin');
let answer = "";
for (let i = 1; i <= input; i++) {
    answer += "*".repeat(i) + " ".repeat(2 * (Number(input) - i)) + "*".repeat(i) + "\n"
}
for (let i = input - 1; i > 0; i--) {
    answer += "*".repeat(i) + " ".repeat(2 * (Number(input) - i)) + "*".repeat(i) + "\n"
}
console.log(answer.trim());