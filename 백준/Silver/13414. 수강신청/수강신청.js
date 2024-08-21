const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [kl, ...students] = fs.readFileSync(path).toString().trim().split('\n');
const [k, l] = kl.split(' ').map((it) => Number(it));
const studentsMap = new Map();

for (const targetStudent of students) {
  if (studentsMap.has(targetStudent)) {
    studentsMap.delete(targetStudent);
  }
  studentsMap.set(targetStudent);
}

let cnt = 0;
const answer = [];

studentsMap.forEach((_, key) => {
  if (cnt < k) answer.push(key);
  cnt++;
});

console.log(answer.join('\n'));