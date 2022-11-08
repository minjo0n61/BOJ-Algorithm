const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
const testCase = +input.shift();
let numArray = [];
let answer = '';
for (let i = 0; i < testCase; i++) {
    let line = input[i].split(" ");
    if (line.includes("push")) {
        numArray.push(+line[1]);
    }
    else if (line.includes("top")) {
        answer += (numArray.length === 0 ? -1 : numArray[numArray.length - 1]) + "\n";
    }
    else if (line.includes("size")) {
        answer += numArray.length + "\n";
    }
    else if (line.includes("empty")) {
        answer += (numArray.length === 0 ? 1 : 0) + "\n";
    }
    else if (line.includes("pop")) {
        answer += (numArray.length === 0 ? -1 : numArray.pop()) + "\n";
    }
}
console.log(answer.trim());