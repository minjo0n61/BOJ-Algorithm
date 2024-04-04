const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");

const testCases = parseInt(input[0], 10);
let inputIndex = 1;

for (let t = 0; t < testCases; t++) {
    const a = input[inputIndex++];
    const b = input[inputIndex++];
    let cnt = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            cnt += 1;
        }
    }

    console.log(`Hamming distance is ${cnt}.`);
}