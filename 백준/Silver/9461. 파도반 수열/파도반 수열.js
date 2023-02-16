const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
let testcase = input.shift();
let memo = new Array(101).fill(0);

function dp(num) {
    if (num === 1 || num === 2 || num === 3) {
        memo[num] = 1;
        return memo[num];
    }
    if (memo[num] !== 0) {
        return memo[num];
    }
    else {
        memo[num] = dp(num - 2) + dp(num - 3);
        return memo[num];
    }
}

for (let i = 0; i < testcase; i++) {
    console.log(dp(input[i]));
}