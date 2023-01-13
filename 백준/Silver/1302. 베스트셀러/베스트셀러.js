const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
let testcase = +input.shift();
let S = new Map();
let answer = [];
input.forEach(el => {
    if (S.has(el)) {
        S.set(el, S.get(el) + 1);
    } else {
        S.set(el, 1);
    }
})
let M = S.entries();
for (const [key, value] of M) {
    answer.push([key, value]);
}
answer.sort((a, b) => {
    if (b[1] === a[1]) {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    } else {
        return b[1] - a[1];
    }
});
console.log(answer[0][0]);