const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(x => +x);

console.log(Math.abs(input[0] + input[3] - input[1] - input[2]));