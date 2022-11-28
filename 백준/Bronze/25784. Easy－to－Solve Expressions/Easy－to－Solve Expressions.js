const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number).sort((a, b) => a - b);
if (input[0] + input[1] == input[2]) {
    console.log(1);
} else if (input[0] * input[1] == input[2]) {
    console.log(2);
} else {
    console.log(3);
}