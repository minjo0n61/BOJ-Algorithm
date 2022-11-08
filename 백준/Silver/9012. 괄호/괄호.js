// 조건1 (와)의 개수가 동일해야함
// 조건2 )가 맨 앞에 오면 안됨
// 조건3 (가 맨 뒤에 오면 안됨
// 조건4 (가 안왔는데 )가 먼저오면 안됨(카운터에 +1,-1 계산 끝났을때 0이 아니거나 중간에 -값이 나오면 NO출력)=>이 조건이 123도 충족해서 이 조건만 활용
let input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
const testCase = +input.shift();

for (let i = 0; i < testCase; i++) {
    let eachLine = input[i].split("");
    let count = 0;
    for (let j = 0; j < eachLine.length; j++) {
        eachLine[j] === "(" ? count++ : count--;
        if (count < 0) {
            break;
        }
    }
    count === 0 ? console.log("YES") : console.log("NO");
}