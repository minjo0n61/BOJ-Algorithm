const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testCase = +input.shift();
let answer = '';
for (let i = 0; i < testCase; i++) {
    let price = +input.shift();
    let count = +input.shift();
    if (count > 0) {
        for (let j = 0; j < count; j++) {
            let [a, b] = input.shift();
            price += a * b;
        }
    } else {

    }
    answer += price + "\n";
}

console.log(answer.trim());