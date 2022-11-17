const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
let month = +input[0];
let day = +input[1];

if (month === 2 && day === 18) {
    console.log("Special");
} else if (month === 2 && day < 18) {
    console.log("Before");
} else if (month < 2) {
    console.log("Before");
} else {
    console.log("After");
}