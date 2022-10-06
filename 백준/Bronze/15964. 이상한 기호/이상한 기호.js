const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

function goal(num1, num2) {
    return (num1 + num2) * (num1 - num2);
}

console.log(goal(input[0], input[1]));