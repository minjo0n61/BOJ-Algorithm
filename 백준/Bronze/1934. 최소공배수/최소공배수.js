const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const testcase = input[0];

function getGcd(a, b) {
    if (b === 0) { return a };
    return getGcd(b, a % b);
}

function getLcm(a, b) {
    return (a * b) / getGcd(a, b);
};

for (let i = 0; i < testcase; i++) {
    let line = input[i + 1].split(" ");
    console.log(getLcm(line[0], line[1]));
}