const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testNum = input.shift()[0];
let testCase = input.shift();
let result = [];
let stack = [];

stackLine(testCase);

function stackLine(testCase) {
    let i = 1;
    while (result.length !== testNum) {
        if (stack.length && stack[stack.length - 1] == i) {
            result.push(stack.pop());
            i++;
        }
        else {
            let nextNum = testCase.shift();
            if (nextNum == undefined) {
                return console.log("Sad");
            }
            else if (nextNum == i) {
                result.push(nextNum);
                i++;
            } else {
                stack.push(nextNum);
            }
        }
    }
    return console.log("Nice")
}
