const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map((el) => el.split(" "));
const testCase = +input.shift();
let answerArr = [];
let answer = [];
for (let i = 0; i < testCase; i++) {
    if (input[i][0] === "push") {
        answerArr.push(+input[i][1]);
    }
    else if (input[i][0] === "pop") {
        answer.push(answerArr.length === 0 ? -1 : answerArr.shift());
    }
    else if (input[i][0] === "size") {
        answer.push(answerArr.length);
    }
    else if (input[i][0] === "empty") {
        answer.push(answerArr.length === 0 ? 1 : 0);
    }
    else if (input[i][0] === "front") {
        answer.push(answerArr.length === 0 ? -1 : answerArr[0]);
    }
    else {
        answer.push(answerArr.length === 0 ? -1 : answerArr[answerArr.length - 1]);
    }
}

console.log(answer.join("\n"));