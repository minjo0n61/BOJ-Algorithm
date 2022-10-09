const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(Number);

if (input[0] * 8 + input[1] * 3 < 28) {
    console.log(0);
} else {
    console.log(input[0] * 8 + input[1] * 3 - 28);
}