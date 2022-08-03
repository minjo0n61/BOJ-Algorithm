const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let original = Number(input);
let change_num = 0;
let count = 0;

while (true) {
    count++;
    change_num = Math.trunc(original / 10) + original % 10;
    original = original % 10 * 10 + change_num % 10;
    if (Number(input) === original) {
        break;
    }
}
console.log(count);