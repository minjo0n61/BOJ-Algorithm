const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n');

function removeDuplicates(numbers) {
    return numbers.filter((num, index, array) => num !== array[index - 1]);
}

let i = 0;
while (true) {
    const N = parseInt(input[i]);
    if (N === 0) break;

    const numbers = input[i].split(' ').slice(1).map(Number);
    const uniqueNumbers = removeDuplicates(numbers);
    console.log(uniqueNumbers.join(' ') + ' $');

    i++;
}