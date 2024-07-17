const input = +require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString().trim();

let remainingBirds = input;
let seconds = 0;
let currentNumber = 1;

while (remainingBirds > 0) {
    if (currentNumber > remainingBirds) {
        currentNumber = 1;
    }
    
    remainingBirds -= currentNumber;
    seconds++;
    currentNumber++;
}

console.log(seconds);