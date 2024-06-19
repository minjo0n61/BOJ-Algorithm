const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);
const cases = input.slice(1).map(Number);

const results = cases.map(k => {
    let passengers = 0;
    for (let i = 0; i < k; i++) {
        passengers = passengers * 2 + 1;
    }
    return passengers;
});

results.forEach(result => console.log(result));
