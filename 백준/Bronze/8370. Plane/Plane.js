const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(x=> +x);
console.log(input[0]*input[1]+input[2]*input[3]);