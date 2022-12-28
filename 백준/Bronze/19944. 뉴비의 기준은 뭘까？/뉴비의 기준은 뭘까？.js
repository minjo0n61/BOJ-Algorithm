const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);

if (input[1] < 3) {
    console.log("NEWBIE!");
} else {
    if (input[1] <= input[0]) {
        console.log("OLDBIE!");
    } else {
        console.log("TLE!");
    }
}