const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
let testcase = input.shift();
for (let i = 0; i < testcase; i++) {
    console.log(`$${parseFloat(input[i] * 0.8).toFixed(2)}`);
}