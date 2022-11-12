const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => +el);
const testCase = input.shift();
let answer = '';
let sum = input.reduce((past, current) => {
    past = past + current
    return past
}, 0);
answer += Math.round(sum / input.length) + "\n";
input.sort((a, b) => a - b);
answer += input[Math.floor(input.length / 2)] + "\n";

function choibin(array) {
    if (array.length === 1) {
        return array[0];
    }
    let choibinObj = array.reduce((obj, el) => {
        obj[el] = (obj[el] ? ++obj[el] : 1);
        return obj;
    }, {})
    let answer = [];
    for (let el in choibinObj) {
        answer.push([el, choibinObj[el]]);
    }
    answer.sort((a, b) => b[1] - a[1]);
    if (answer[0][1] === answer[1][1]) {
        let numArr = [];
        for (let i = 0; i < answer.length; i++) {
            if (answer[i][1] === answer[0][1]) {
                numArr.push(answer[i])
            }
        }
        numArr.sort((a, b) => (+a[0]) - (+b[0]))

        return +numArr[1][0];
    }
    return +answer[0][0];
}
answer += choibin(input) + "\n";
answer += (input[input.length - 1] - input[0]);
console.log(answer);