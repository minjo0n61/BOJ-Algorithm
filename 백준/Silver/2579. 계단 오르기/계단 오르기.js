const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
let stairsNum = +input.shift();
let arr = new Array(stairsNum).fill(0);

arr[0] = input[0];
arr[1] = Math.max(input[0] + input[1], input[1]);
arr[2] = Math.max(input[0] + input[2], input[1] + input[2]);
for (let i = 3; i < stairsNum; i++) {
    arr[i] = Math.max(input[i] + input[i - 1] + arr[i - 3], input[i] + arr[i - 2]);
}
console.log(arr[stairsNum - 1]);