const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n');

const P = parseInt(input[0]);

function countSequences(coins) {
    const sequences = {
        'TTT': 0, 'TTH': 0, 'THT': 0, 'THH': 0,
        'HTT': 0, 'HTH': 0, 'HHT': 0, 'HHH': 0
    };

    for (let i = 0; i < 38; i++) {
        const seq = coins.slice(i, i + 3);
        sequences[seq]++;
    }

    return Object.values(sequences);
}

for (let i = 1; i <= P; i++) {
    const coins = input[i].trim();
    const counts = countSequences(coins);
    console.log(counts.join(' '));
}