const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const line = input[0].split(" ").map(x => +x);
const hap = line[1];
let lineTwo = input[1].split(" ").map(x => +x);
let maxint = 0;

for (let i = 0; i < line[0] - 2; i++) {
    for (let j = i + 1; j < line[0] - 1; j++) {
        for (let k = j + 1; k < line[0]; k++) {
            let sumNum = lineTwo[i] + lineTwo[j] + lineTwo[k];
            if (sumNum > maxint && sumNum <= hap) {
                maxint = sumNum;
            }
        }
    }
}

console.log(maxint);