const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let [N, M] = input.shift();
let arr = new Array(N).fill(0);

for (let i = 0; i < M; i++) {
    let [a, b, c] = input[i];
    arr.splice(a - 1, b - a + 1);
    for (let j = 0; j < b - a + 1; j++) {
        arr.splice(a - 1, 0, c);
    }
}
console.log(arr.join(" "));