const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n").map(el=>el.split(" ").map(Number));
const [A, B, C] = input.shift();

let time = new Array(101).fill(0);
let answer = 0;
input.forEach(v => {
  const [start, end] = v;
  for (let x = start; x < end; x++) {
    time[x]++;
  }
})

time.forEach(v => {
  switch (v) {
    case 1:
      answer += A;
      break;
    case 2:
      answer += B * 2;
      break;
    case 3:
      answer += C * 3;
      break;
  }
})

console.log(answer)