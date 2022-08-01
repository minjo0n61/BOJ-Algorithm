const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let subject_num = Number(input[0]);
let subject_score = input[1].split(" ");
const M = Math.max(...subject_score);
let sum = 0;

for (let i = 0; i < subject_num; i++) {
    if (subject_num[i] !== M) {
        sum += subject_score[i] / M * 100;
    } else {
        sum += M;
    }
}


console.log(sum / subject_num);