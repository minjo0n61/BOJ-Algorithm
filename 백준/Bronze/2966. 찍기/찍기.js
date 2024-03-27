const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
const N = parseInt(input[0]);
const answers = input[1].split('');

const patterns = {
  'Adrian': ['A', 'B', 'C'],
  'Bruno': ['B', 'A', 'B', 'C'],
  'Goran': ['C', 'C', 'A', 'A', 'B', 'B']
};

let scores = {
  'Adrian': 0,
  'Bruno': 0,
  'Goran': 0
};

Object.keys(patterns).forEach(person => {
  const pattern = patterns[person];
  for (let i = 0; i < N; i++) {
    if (answers[i] === pattern[i % pattern.length]) {
      scores[person]++;
    }
  }
});

const maxScore = Math.max(...Object.values(scores));

console.log(maxScore);

Object.keys(scores).forEach(person => {
  if (scores[person] === maxScore) {
    console.log(person);
  }
});
