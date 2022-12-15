const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
let [nNum, mNum] = input.shift().split(" ").map(Number);
let hear = input.slice(0, nNum);
let see = input.slice(nNum);
let answer = [];
let hearSet = new Set(hear);
see.forEach(el => {
    if (hearSet.has(el)) {
        answer.push(el);
    }
});
answer.sort();
console.log(answer.length + "\n" + answer.join("\n"));