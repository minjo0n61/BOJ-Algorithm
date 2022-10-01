const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

if (input[0] * input[1] - input[2] > 0) {
    console.log(input[0] * input[1] - input[2]);
}
else {
    console.log(0);
}