const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map((el) => el.split(" ").map(Number));
const testCase = input.shift();
let answer = '';
input.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    }
    else {
        return a[1] - b[1];
    }
});
for (let i = 0; i < input.length; i++) {
    answer += input[i][0] + " " + input[i][1] + "\n";
}
console.log(answer.trim());