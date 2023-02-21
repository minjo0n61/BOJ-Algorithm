const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testcase = input.shift();
let num = input[0];
let dp = new Array(testcase).fill(0);

for (let i = 0; i < testcase; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
        if (num[i] > num[j]) {
            max = Math.max(dp[j], max);
        }
    }
    dp[i] = max + 1;
}
console.log(Math.max(...dp));