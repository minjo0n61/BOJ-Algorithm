const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let result = [];

for (let i = 0; i < input.length; i++) {
    result.push((input[i][0] / input[i][1]).toFixed(2))
}
console.log(result.join("\n"));