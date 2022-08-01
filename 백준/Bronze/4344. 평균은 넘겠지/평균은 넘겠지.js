const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const testcase = Number(input[0]);
let 정답 = "";
let 각줄_점수_합 = 0;
let count = 0;

for (let i = 1; i <= testcase; i++) {
    let 각줄 = input[i].trim().split(" ");
    let 각줄_학생수 = Number(각줄[0]);

    for (let j = 1; j <= 각줄_학생수; j++) {
        각줄_점수_합 += Number(각줄[j])
    }
    let 각줄_평균 = 각줄_점수_합 / 각줄_학생수;
    각줄_점수_합 = 0;
    for (let t = 1; t <= 각줄_학생수; t++) {
        if (Number(각줄[t]) > Number(각줄_평균)) {
            count++;
        }
    }

    정답 += (count / 각줄_학생수 * 100).toFixed(3) + "%" + "\n"
    count = 0;
}

console.log(정답.trim());