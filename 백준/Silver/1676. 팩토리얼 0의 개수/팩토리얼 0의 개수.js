const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();
let dp = Array(input + 1).fill(0);
dp[0] = BigInt(1);
dp[1] = BigInt(1);
dp[2] = BigInt(2);

let i = BigInt(1);
while (i <= input) {
  dp[i] = dp[i - BigInt(1)] * i;
  i++;
}
let check = dp[input].toString().split("");

let j = check.length;
let count = 0;
while (check[j - 1] == 0) {
  if (check[j - 1] == 0) {
    count++;
  }
  j--;
}

console.log(count);
