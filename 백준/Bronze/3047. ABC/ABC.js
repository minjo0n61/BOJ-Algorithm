const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
let answer = [];
let num = input[0].split(" ").map(Number).sort((a, b) => a - b);
let alphabet = input[1].split("");
for (let i = 0; i < 3; i++) {
    if (alphabet[i] === "A") {
        answer.push(num[0]);
    } else if (alphabet[i] === "B") {
        answer.push(num[1]);
    } else {
        answer.push(num[2]);
    }
}

console.log(answer.join(" "));