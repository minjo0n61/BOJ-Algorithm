const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let [N, M] = input[0];
let list = input[1];
let sum = 0;
for (let i = 0; i <= N; i++) {
    for (let j = 0; j < M; j++) {
        if (i % list[j] === 0) {
            sum += i;
            break;
        }
    }
}
console.log(sum);