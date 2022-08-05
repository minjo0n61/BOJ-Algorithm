const input = require('fs').readFileSync('/dev/stdin').toString();
let strEx = input.toLowerCase(); //대소문자 구분 안하기 위해 통일하는 과정 ex)mississipi
let result = new Array(26).fill(0); //a부터z까지 26개의 숫자 비교하기 위해 빈 배열 생성
for (let i = 0; i < strEx.length; i++) {
    result[strEx.charCodeAt(i) - 97]++;//strEx의 매 자릿수 마다 아스키코드로 변경 후 -97을 하여 0번에 a가 오도록 알파벳 순서만 남게하고 빈 배열(알파벳순서)에 해당 자리의 값 +1
}

const max = Math.max(...result);//최댓값 뽑아냄
const index = result.indexOf(max);//최댓값에 해당하는 번호 뽑아냄

let isSame = false;

for (let j = 0; j < 26; j++) {
    if (result[j] === max && index !== j) {
        isSame = true;
        break;
    }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));//출력은 대문자 이므로 +65