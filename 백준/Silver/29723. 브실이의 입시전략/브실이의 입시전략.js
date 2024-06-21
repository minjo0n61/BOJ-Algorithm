const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, K] = input[0].split(' ').map(Number);

const scores = {};
for (let i = 1; i <= N; i++) {
  const [subject, score] = input[i].split(' ');
  scores[subject] = Number(score);
}

const requiredSubjects = [];
for (let i = N + 1; i <= N + K; i++) {
  requiredSubjects.push(input[i]);
}

const requiredScores = requiredSubjects.map(subject => scores[subject]);
const otherScores = Object.keys(scores)
  .filter(subject => !requiredSubjects.includes(subject))
  .map(subject => scores[subject]);

const maxScore = requiredScores.reduce((sum, score) => sum + score, 0) +
  otherScores.sort((a, b) => b - a).slice(0, M - K).reduce((sum, score) => sum + score, 0);

const minScore = requiredScores.reduce((sum, score) => sum + score, 0) +
  otherScores.sort((a, b) => a - b).slice(0, M - K).reduce((sum, score) => sum + score, 0);

console.log(minScore, maxScore);
