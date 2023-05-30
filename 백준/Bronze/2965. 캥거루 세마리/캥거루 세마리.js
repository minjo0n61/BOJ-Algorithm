const input = require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString().trim().split(" ").map(el=>+el);
let a = Math.max(input[1]-input[0], input[2]-input[1]);
console.log(a-1);