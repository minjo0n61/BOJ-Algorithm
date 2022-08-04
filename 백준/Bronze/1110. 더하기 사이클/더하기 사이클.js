let input = require('fs').readFileSync('/dev/stdin').toString();
let origin = Number(input);
let count = 0;

while (true) {
    let sum = Math.floor(input / 10) + (input % 10);
    input = (input % 10) * 10 + (sum % 10);
    count++
    if (origin === input) break;
}
console.log(count);
