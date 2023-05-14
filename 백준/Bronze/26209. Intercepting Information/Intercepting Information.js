const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);

if (input.includes(9)) {
    console.log("F");
} else {
    console.log("S");
}