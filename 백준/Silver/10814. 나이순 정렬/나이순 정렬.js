const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map((el) => el.split(" "));
const testCase = +input.shift();
let answer = '';
input.sort((a, b) => {
    if (a[0] !== b[0]) {
        return a[0] - b[0];
    }
})
for (let i = 0; i < testCase; i++) {
    let age = +input[i][0];
    let name = input[i][1];
    answer += age + " " + name + "\n";
}
console.log(answer.trim());