const input = require('fs').readFileSync('/dev/stdin');
const N = +input;
let M = 0;

for (let i = 0; i < N; i++) {
    let sum = 0;
    let candidateValue = i;
    let stringValue = candidateValue.toString();

    for (let j = 0; j < stringValue.length; j++) {
        sum += +stringValue[j];
    }
    sum += candidateValue;

    if (sum === N) {
        M = candidateValue;
        break;
    }
}

console.log(M);