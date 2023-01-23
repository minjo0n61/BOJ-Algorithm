const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
let testcase = input.shift();
let dab = '';
for (let i = 0; i < testcase; i++) {
    let num = input.shift();
    let twonum = num.toString(2);
    let answer = [];
    let solve = [];
    for (let j = twonum.length - 1; j >= 0; j--) {
        answer.push(twonum[j]);
    }
    for (let j = 0; j < answer.length; j++) {
        if (answer[j] === "1") {
            solve.push(j);
        }
    }
    dab += solve.join(" ") + "\n";
}
console.log(dab.trim());