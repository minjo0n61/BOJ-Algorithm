const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
let answerArr = [];

function isPalindrome(arr, yesorno) {
    if (arr.length === 0 || arr.length === 1) {
        yesorno = "yes";
        return [yesorno];
    }
    if (arr[arr.length - 1] === arr[0]) {
        arr.shift();
        arr.pop();
        return isPalindrome(arr, yesorno);
    } else {
        yesorno = "no";
        return [yesorno];
    }
}

for (let i = 0; i < input.length - 1; i++) {
    let arr = input[i].toString().split("");
    let yesorno = 0;
    answerArr.push(isPalindrome(arr, yesorno));
}

let answer = '';
for (let i = 0; i < answerArr.length; i++) {
    answer += answerArr[i] + "\n"
}
console.log(answer.trim());