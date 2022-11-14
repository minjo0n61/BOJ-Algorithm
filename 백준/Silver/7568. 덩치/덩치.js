const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(el => parseInt(el)));
const testCase = +input.shift();
let rank = [];

for (let i = 0; i < testCase; i++) {
    let count = 0;
    for (let j = 0; j < testCase; j++) {
        if (i !== j) {
            if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) { count++ }
        }
    }
    rank.push(count + 1);
}
console.log(rank.join(" "));