const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map((el) => el.split(" ").map((el) => +el));
const testCase = input.shift();
let arr = new Array(100).fill().map(() => new Array(100).fill(false));

for (let i = 0; i < testCase; i++) {
    let x = input[i][0];
    let y = input[i][1];

    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            arr[x + j][y + k] = true;
        }
    }
}
let answer = arr.reduce((past, current) => {
    for (let el of current) {
        if (el) {
            past++;
        }
    }
    return past;
}, 0);

console.log(answer);