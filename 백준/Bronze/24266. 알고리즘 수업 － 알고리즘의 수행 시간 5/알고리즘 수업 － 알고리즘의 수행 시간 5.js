const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let num = BigInt(input);

console.log(`${num * num * num}`);
console.log('3');