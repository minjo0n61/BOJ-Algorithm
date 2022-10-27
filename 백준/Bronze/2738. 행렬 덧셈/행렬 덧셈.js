const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(x => x.split(" ").map(Number));

const [n, m] = input.shift()
let arr = new Array(n).fill(0).map(() => new Array(m).fill(0))

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        arr[i][j] = input[i][j] + input[i + n][j];
    }
}

let answer = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        answer += arr[i][j].toString() + " ";
    }
    answer += "\n";
}
console.log(answer.trim());