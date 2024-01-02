const input = require('fs').readFileSync('/dev/stdin').toString();
let num = Number(input);
let count = 0;

while (true) {
    if (num % 5 === 0) {
        count += num / 5;
        console.log(count)
        break;
    }
    num = num - 3;
    count++;
    if (0 > num) {
        console.log(-1);
        break;
    }
}