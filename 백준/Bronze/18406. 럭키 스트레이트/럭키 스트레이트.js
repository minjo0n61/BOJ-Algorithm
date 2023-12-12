const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("");
let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < input.length; i++) {
    if (i < input.length / 2) {
        sum1 += Number(input[i]);
    } else {
        sum2 += Number(input[i]);
    }
}

if (sum1 === sum2) {
    console.log("LUCKY");
} else {
    console.log("READY");
}