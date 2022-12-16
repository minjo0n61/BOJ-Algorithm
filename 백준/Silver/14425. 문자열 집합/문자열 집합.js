const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n");
let [nNum, mNum] = input.shift().split(" ").map(Number);
let sGroup = input.slice(0, nNum);
let test = input.slice(nNum);
let answer = [];
let sGroupSet = new Set(sGroup);
test.forEach(el => {
    if (sGroupSet.has(el)) {
        answer.push(el);
    }
});
console.log(answer.length);