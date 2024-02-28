const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let i = 1;
while (true) {
  let n = 0;
  for (let j of input) if (i % j === 0) n++;
  if (n >= 3) break;
  i++;
}
console.log(i);
