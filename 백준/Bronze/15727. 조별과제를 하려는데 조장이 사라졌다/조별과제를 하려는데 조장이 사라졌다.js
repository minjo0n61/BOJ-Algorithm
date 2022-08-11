const input = require('fs').readFileSync('/dev/stdin').toString();
let length = Number(input);
let count = 0;
while (true) {
    let remain = length;
    if (remain >= 5) {
        count += Math.trunc(remain / 5);
        remain = remain - Math.trunc(remain / 5) * 5
    }
    if (remain >= 4) {
        count += Math.trunc(remain / 4);
        remain = remain - Math.trunc(remain / 4) * 4
    }
    if (remain >= 3) {
        count += Math.trunc(remain / 3);
        remain = remain - Math.trunc(remain / 3) * 3
    }
    if (remain >= 2) {
        count += Math.trunc(remain / 2);
        remain = remain - Math.trunc(remain / 2) * 2
    }
    if (remain === 1) {
        remain -= 1;
        count += 1;
    }
    if (remain <= 0) {
        console.log(count);
        break;
    }
}