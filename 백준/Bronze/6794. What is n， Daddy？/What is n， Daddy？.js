const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let num = +input;
let count = 0;
for (let i = 0; i <= 5; i++) {
    for (let j = i; j <= 5; j++) {
        if (i + j === num) {
            count += 1;
        }
    }
}
console.log(count);