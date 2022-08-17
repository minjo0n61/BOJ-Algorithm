const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const firstLine = input[0].split(" ").map(Number);
const secondLine = input[1].split(" ").map(Number);
const manNum = firstLine[0] * firstLine[1];
let answer = [];
for (let i = 0; i < secondLine.length; i++) {
    answer += Number(secondLine[i] - manNum) + " ";
}
console.log(answer);