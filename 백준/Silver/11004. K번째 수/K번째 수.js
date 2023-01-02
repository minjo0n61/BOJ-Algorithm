const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n").map(el => el.split(" ").map(el => +el));
let [n, k] = input.shift();
let arr = input[0];
arr.sort((a, b) => a - b);
console.log(arr[k - 1]);