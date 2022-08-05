const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let original = Number(input);
let count = 0;
let sum = 0;

while (true) {
    count++;
    sum = Math.floor(original / 10) + original % 10
    original = original % 10 * 10 + sum % 10;
    if (Number(input) === original) {
        console.log(count);
        break;
    }
}