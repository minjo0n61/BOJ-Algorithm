const input = require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString().trim().split(" ").map(el=>+el);

let result = input[0].toString(input[1]).toUpperCase();

console.log(result);