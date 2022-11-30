const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);
let arr = [];
for (let i = 1; i <= input[0]; i++) {
    if (input[0] % i === 0) {
        arr.push(i);
    }
}
console.log(arr[input[1] - 1] ? arr[input[1] - 1] : 0);