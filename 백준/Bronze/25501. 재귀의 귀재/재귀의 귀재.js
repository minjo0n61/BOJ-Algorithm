const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
const testCase = +input.shift();
let answerArr = [];

function isPalindrome(str, num1, num2) {
    if (str.length === 0 || str.length === 1) {
        num2++;
        num1 = 1;
        return [num1, num2];
    }
    if (str[str.length - 1] === str[0]) {
        str.shift();
        str.pop();
        num2++;
        return isPalindrome(str, num1, num2);
    } else {
        num2++;
        num1 = 0;
        return [num1, num2];
    }
}

for (let i = 0; i < testCase; i++) {
    let arr = input[i].toString().split("");
    let num1 = 0;
    let num2 = 0;
    answerArr.push(isPalindrome(arr, num1, num2));
}
let answer = '';
for (let i = 0; i < answerArr.length; i++) {
    answer += answerArr[i][0] + " " + answerArr[i][1] + "\n"
}
console.log(answer.trim());