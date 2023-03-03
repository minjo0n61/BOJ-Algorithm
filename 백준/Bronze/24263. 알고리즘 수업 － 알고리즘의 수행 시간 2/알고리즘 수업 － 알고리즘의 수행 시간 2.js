const input = require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString().trim();
console.log(input);
console.log(1);