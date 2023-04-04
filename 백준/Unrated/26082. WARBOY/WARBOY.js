const input = require('fs').readFileSync(process.platform==="linux"?"/dev/stdin":"./input.txt").toString().split(" ").map(Number);

let answer = input[1]/input[0]*input[2]*3;
console.log(answer);