const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function digitSum(n) {
  while (n >= 10) {
    n = n.toString().split('').reduce((acc, val) => acc + Number(val), 0);
  }
  return n;
}

for (let i = 0; i < input.length; i++) {
  const number = parseInt(input[i], 10);
  if (number === 0) break;
  console.log(digitSum(number));
}
