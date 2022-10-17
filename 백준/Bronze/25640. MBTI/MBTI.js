const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let sum = 0;
for (let i = 0; i < +input[1]; i++) {
    if (input[i + 2] === input[0]) {
        sum++;
    }
}
console.log(sum);