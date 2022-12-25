const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
console.log(input.endsWith("driip") ? "cute" : "not cute");