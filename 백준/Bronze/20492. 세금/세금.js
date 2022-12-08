const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString();
let answer = '';
answer += +input * 0.78;
answer += " ";
answer += +input * 0.2 * 0.78 + (+input) * 0.8;
console.log(answer);