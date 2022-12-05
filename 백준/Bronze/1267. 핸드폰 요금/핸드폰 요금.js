const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testCase = +input.shift();
let time = input[0];
let priceY = 0;
let priceM = 0;

for (let i = 0; i < testCase; i++) {
    if (time[i] < 30) {
        priceY += 10;
    } else {
        time[i] % 30 === 0 ? (priceY += time[i] / 30 * 10 + 10) : (priceY += Math.floor(time[i] / 30) * 10 + 10);
    }
}
for (let i = 0; i < testCase; i++) {
    if (time[i] < 60) {
        priceM += 15;
    } else {
        time[i] % 60 === 0 ? (priceM += time[i] / 60 * 15 + 15) : (priceM += Math.floor(time[i] / 60) * 15 + 15);
    }
}
if (priceM === priceY) {
    console.log(`Y M ${priceM}`);
} else if (priceM > priceY) {
    console.log(`Y ${priceY}`);
} else {
    console.log(`M ${priceM}`);
}