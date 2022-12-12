const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
let [n, m] = [input[0], input[2]];
let [nNum, mNum] = [new Set(input[1]), input[3]];
let newnNum = [];
nNum.forEach((el) => {
    newnNum.push(el);
});
let answer = '';

for (let i = 0; i < m; i++) {
    if (nNum.has(mNum[i])) {
        answer += 1 + " ";
    } else {
        answer += 0 + " ";
    }
}

console.log(answer.trim());