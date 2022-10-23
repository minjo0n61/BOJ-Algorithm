const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const lineOne = input[0].split(" ");
const hap = lineOne[1];

const card = input[1].split(" ").map(x => +x);
card.sort((a, b) => a - b);
let max = 0;

for (let i = 0; i < card.length - 2; i++) {
    for (let j = i + 1; j < card.length - 1; j++) {
        for (let k = j + 1; k < card.length; k++) {
            let sum = (card[i] + card[j] + card[k]);
            if (sum <= hap && sum > max) {
                max = sum;
            }
        }
    }
}
console.log(max);