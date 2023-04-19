const input = require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString().trim().split("\n");
let testcase = +input.shift();

for (let i = 0; i < testcase; i++) {
    if (input[i].length >= 6 && input[i].length <= 9) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

