const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testcase = input.shift();

for (let i = 0; i < testcase; i++) {
    let [legCnt, chickenCnt] = input[i];
    let liveChicken = chickenCnt * 2 - legCnt
    console.log(liveChicken, chickenCnt - liveChicken);
}