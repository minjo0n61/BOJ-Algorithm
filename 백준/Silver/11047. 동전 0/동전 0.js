const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n");
let [coinNum, money] = input.shift().split(" ").map(Number);
let coin = input.map(Number).sort((a, b) => b - a);
let answer = 0;

for (let i = 0; i < coinNum; i++) {
    if (Math.floor(money / coin[i]) === 0) { continue; }
    else {
        answer += Math.floor(money / coin[i]);
        money = money - Math.floor(money / coin[i]) * coin[i];
    }
}
console.log(answer);