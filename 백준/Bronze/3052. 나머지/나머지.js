//배열안에 각각 대입해봐서 결과 출력
//서로 다른 값 몇개인지=>나머지 다른 값이면 변수에 +1

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

let arr = [];

input.forEach(element => {
    let num = element % 42;
    if (arr.indexOf(num) === -1) {
        arr.push(num);
    }

});
console.log(arr.length);