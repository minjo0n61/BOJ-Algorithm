const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" "));

for (let i = 0; i < input.length - 1; i++) {
    if (input[i][1] > 17 || input[i][2] >= 80) {
        console.log(`${input[i][0]} Senior`);
    } else {
        console.log(`${input[i][0]} Junior`);
    }
}