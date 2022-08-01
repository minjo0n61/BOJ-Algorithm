const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const testCase = Number(input[0]);

let Line = '';
let Line_num = 0;
let Line_string = '';
let answer = '';

for (let i = 1; i <= testCase; i++) {
    Line = input[i].trim().split(" ");
    Line_num = Number(Line[0]);
    Line_string = Line[1].trim().split("");

    for (let j = 0; j < Line_string.length; j++) {
        answer += Line_string[j].repeat(Line_num)
    }
    answer += "\n";
}

console.log(answer);
