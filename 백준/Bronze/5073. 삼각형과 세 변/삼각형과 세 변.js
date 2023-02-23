const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let answer = [];

for (let i = 0; i < input.length - 1; i++) {
    let [a, b, c] = input[i].sort((a, b) => a - b);
    answer.push(triangle(a, b, c));
}
console.log(answer.join("\n"));

function triangle(a, b, c) {
    if (a + b <= c) {
        return "Invalid";
    } else if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}