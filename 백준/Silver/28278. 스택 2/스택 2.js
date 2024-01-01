const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
const testcase = +input.shift();
let stack = [];
let result = [];

for (let i = 0; i < testcase; i++) {
    switch (input[i][0]) {
        case 1:
            stack.push(input[i][1]);
            break;
        case 2:
            if (stack.length) {
                result.push(stack.pop());
            } else {
                result.push(-1);
            }
            break;
        case 3:
            result.push(stack.length);
            break;
        case 4:
            if (stack.length) {
                result.push(0);
            } else {
                result.push(1);
            }
            break;
        case 5:
            if (stack.length) {
                result.push(stack[stack.length - 1]);
            } else {
                result.push(-1);
            }
            break;
    }
}

console.log(result.join("\n"));