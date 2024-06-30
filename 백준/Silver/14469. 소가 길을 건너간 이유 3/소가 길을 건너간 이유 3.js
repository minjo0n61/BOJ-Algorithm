const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const cows = input.slice(1).map(line => {
    const [arrival, duration] = line.split(' ').map(Number);
    return { arrival, duration };
});

cows.sort((a, b) => a.arrival - b.arrival);

let currentTime = 0;

for (let i = 0; i < N; i++) {
    const cow = cows[i];
    if (currentTime < cow.arrival) {
        currentTime = cow.arrival;
    }
    currentTime += cow.duration;
}

console.log(currentTime);
