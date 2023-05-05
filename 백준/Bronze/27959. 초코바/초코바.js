const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(el => +el);

if (input[0] * 100 >= input[1]) {
    console.log("Yes");
} else {
    console.log("No");
}