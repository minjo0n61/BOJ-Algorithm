const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ");
let [num1, num2] = input;
let answer = 0;

for (let i = 0; i < num1.length; i++) {
    let mynum = 0;
    for (let j = 0; j < num2.length; j++) {
        mynum += num1[i] * num2[j];
    }
    answer += mynum;
}
console.log(answer);