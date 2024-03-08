const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const n = input[0];
const d = String(input[1]);
const obj = {};

for (let i=1; i<=n; i++) {
  let num = i.toString().split('');
  num.map((e) => {
    obj[e] = (obj[e] || 0) + 1;
  })
}

console.log(obj[d]);