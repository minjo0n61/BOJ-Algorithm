const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let answer = '';
for (let i = 5 * input; i >= 1; i--) {
    for (let j = 5 * input; j >= 1; j--) {
        if (i <= input || j <= input) {
            answer += '@';
        }
    }
    answer += '\n';
}
console.log(answer);