const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(x => +x);

input.sort((a, b) => b - a);
input.pop();

console.log(input[0] + input[1]);