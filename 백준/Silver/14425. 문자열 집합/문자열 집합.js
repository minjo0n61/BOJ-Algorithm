const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, '').split("\n");
let [group, testCase] = input.shift().split(" ").map(Number);
let s = [];
let answer = 0;
for (let i = 0; i < group; i++) {
    s.push(input.shift());
}
s = new Set(s);
for (let i = 0; i < testCase; i++) {
    if (s.has(input[i])) {
        answer++;
    }
}
console.log(answer);