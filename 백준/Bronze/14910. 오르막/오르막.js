const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let isNonDecreasing = true;

for (let i = 1; i < input.length; i++) {
  if (input[i] < input[i - 1]) {
    isNonDecreasing = false;
    break;
  }
}

if (isNonDecreasing) {
  console.log('Good');
} else {
  console.log('Bad');
}
