const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let testcase = Number(input[0]);
let quiz_score = 0;

for (let i = 1; i <= testcase; i++) {
    let quiz = input[i].split("X");
    //console.log(quiz)
    for (let j = 0; j < quiz.length; j++) {
        for (let h = 1; h <= quiz[j].length; h++) {
            quiz_score += h;
        }
    }
    console.log(quiz_score)
    quiz_score = 0;
}