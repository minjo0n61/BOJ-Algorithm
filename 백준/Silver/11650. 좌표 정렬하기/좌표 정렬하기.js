let input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(e => e.split(" ").map(Number));

input.shift();

let answer = '';

input.sort((a, b) => {
    if (a[0] !== b[0]) {
        return a[0] - b[0];
    }
    return a[1] - b[1];
}).forEach(el => {
    answer += `${el[0]} ${el[1]}\n`;
})
console.log(answer.trim());