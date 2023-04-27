const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().toLowerCase().split("\n");
let vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < input.length - 1; i++) {
    let cnt = 0;
    for (let j = 0; j < input[i].length; j++) {
        if (vowels.includes(input[i][j])) {
            cnt++;
        }
    }
    console.log(cnt);
}