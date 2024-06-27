const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, C] = input[0].split(' ').map(Number);
const cycles = input.slice(1).map(Number);

const fireworkTimes = new Array(C + 1).fill(false);

for (let i = 0; i < N; i++) {
  let cycle = cycles[i];
  for (let time = cycle; time <= C; time += cycle) {
    fireworkTimes[time] = true;
  }
}

let result = 0;
for (let i = 1; i <= C; i++) {
  if (fireworkTimes[i]) {
    result++;
  }
}

console.log(result);
