const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let caseNumber = 1;

for (let i = 0; i < input.length; i++) {
  const [r, w, l] = input[i].split(" ").map(Number);
  
  if (r === 0) break;

  const tableDiameter = 2 * r;
  const pizzaDiagonal = Math.sqrt(w * w + l * l);

  if (pizzaDiagonal <= tableDiameter) {
    console.log(`Pizza ${caseNumber} fits on the table.`);
  } else {
    console.log(`Pizza ${caseNumber} does not fit on the table.`);
  }

  caseNumber++;
}