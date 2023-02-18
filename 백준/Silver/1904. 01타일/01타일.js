const input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let memo = new Array(input + 1).fill(0);
memo[1] = 1;
memo[2] = 2;
memo[3] = 3;
for (let i = 4; i <= input; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
}
console.log(memo[input]);