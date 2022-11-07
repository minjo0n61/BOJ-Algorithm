const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);

const testCase = input.shift();

for (let i = 0; i < testCase; i++) {
    let a = input.shift();
    let b = input.shift();
    let apartment = new Array(a + 1).fill().map(() => new Array(b).fill(0));

    for (let j = 0; j <= a; j++) {
        for (let k = 0; k < b; k++) {
            if (j === 0) {
                apartment[j][k] = k + 1;
            }
            else if (k === 0) {
                apartment[j][k] = 1;
            }
            else {
                apartment[j][k] = apartment[j - 1][k] + apartment[j][k - 1];
            }
        }
    }
    console.log(apartment[a][b - 1]);
}