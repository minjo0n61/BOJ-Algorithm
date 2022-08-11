const input = require('fs').readFileSync('/dev/stdin').toString();
let count = 0;
function solution(n) {
    if (Number(input) < 100) {
        count += n;
        return count;
    }
    else if (Number(input) >= 100 && Number(input) <= 1000) {
        for (let i = 100; i <= Number(input); i++) {
            let strNum = i.toString();
            if (Number(strNum[0]) - Number(strNum[1]) === Number(strNum[1]) - Number(strNum[2])) {
                count++;
            } else { continue; }
        }
        return count += 99;
    }
}

console.log(solution(Number(input)));