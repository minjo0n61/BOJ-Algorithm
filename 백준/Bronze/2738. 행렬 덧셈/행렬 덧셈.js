const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let [N, M] = input.shift();
let result = '';

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        result += (input[i][j] + input[i + N][j]).toString() + " ";
    }
    result.trim();
    result += "\n";
}
console.log(result.trim());