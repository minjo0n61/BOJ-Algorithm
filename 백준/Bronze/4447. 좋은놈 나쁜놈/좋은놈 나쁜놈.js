const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const names = input.slice(1);

const results = names.map(name => {
    const lowerCaseName = name.toLowerCase();
    let gCount = 0;
    let bCount = 0;

    for (let char of lowerCaseName) {
        if (char === 'g') {
            gCount++;
        } else if (char === 'b') {
            bCount++;
        }
    }

    let judgement;
    if (gCount > bCount) {
        judgement = 'GOOD';
    } else if (gCount < bCount) {
        judgement = 'A BADDY';
    } else {
        judgement = 'NEUTRAL';
    }

    return `${name} is ${judgement}`;
});

console.log(results.join('\n').trim());
