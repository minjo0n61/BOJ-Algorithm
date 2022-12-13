const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
let n = input.shift().split(" ").map(Number)[0];
let s = [];
let answer = 0;
for (let i = 0; i < n; i++) {
    s.push(input.shift());
}
const set = new Set(s);
input.forEach(value => {
    if (set.has(value)) {
        return answer++;
    }
});
console.log(answer);