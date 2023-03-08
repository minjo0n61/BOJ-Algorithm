const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let [N, M] = input.shift();
let arr = Array.from({ length: N }, (_, index) => index + 1);

for (let i = 0; i < M; i++) {
    let [a, b] = input[i];
    let valueA = arr[a - 1];
    arr[a - 1] = arr[b - 1];
    arr[b - 1] = valueA;
}
console.log(arr.join(" "));