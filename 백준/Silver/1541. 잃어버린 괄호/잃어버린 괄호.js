const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("-");
let group = [];
let answer = 0;
for (let i = 0; i < input.length; i++) {
    let num = input[i].split("+").map(Number);
    let hap = 0;
    for (let j = 0; j < num.length; j++) {
        hap += num[j];
    }
    group.push(hap);
}
for (let i = 0; i < group.length; i++) {
    if (i === 0) {
        answer += group[0];
    }
    else {
        answer -= group[i];
    }
}
console.log(answer);