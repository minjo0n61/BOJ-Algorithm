const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(el => +el));
let [nNum, mNum] = [+input[0], +input[2]];
let [ngroup, mgroup] = [input[1], input[3]]
let answer = [];

let ngroupMap = new Map();
ngroup.forEach(el => {
    if (ngroupMap.has(el)) {
        ngroupMap.set(el, ngroupMap.get(el) + 1);
    }
    else {
        ngroupMap.set(el, 1)
    }
});

mgroup.forEach(el => {
    answer.push(ngroupMap.get(el) || 0);
});
console.log(answer.join(" "));