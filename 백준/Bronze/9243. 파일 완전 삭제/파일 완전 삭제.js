const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const beforeDeletion = input[1];
const afterDeletion = input[2];

let isSuccess = true;

for (let i = 0; i < beforeDeletion.length; i++) {
  if (N % 2 === 0) {
    if (beforeDeletion[i] !== afterDeletion[i]) {
      isSuccess = false;
      break;
    }
  } else {
    if (beforeDeletion[i] === afterDeletion[i]) {
      isSuccess = false;
      break;
    }
  }
}

if (isSuccess) {
  console.log("Deletion succeeded");
} else {
  console.log("Deletion failed");
}
