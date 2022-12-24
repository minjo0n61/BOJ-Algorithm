const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n").map(el => el.split(" ").map(Number));
let testcase = input.shift();
let answer = [];
function getGcd(a, b) {
    if (b === 0) {
        return a;
    }
    return getGcd(b, a % b);
}

for (let i = 0; i < testcase; i++) {
    let result = [];
    input[i].shift();
    for (let j = 0; j < input[i].length; j++) {
        for (let k = j; k < input[i].length; k++) {
            if (j !== k) {
                result.push(getGcd(input[i][j], input[i][k]));
            }
        }
    }
    answer.push(result.reduce((pv, cv) => pv + cv, 0));
}
console.log(answer.join("\n"));