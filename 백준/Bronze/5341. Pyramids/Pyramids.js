const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => +el);

for (let i = 0; i < input.length - 1; i++) {
    let sum = 0;
    for (let j = 1; j <= input[i]; j++) {
        sum += j
    }
    console.log(sum);
}