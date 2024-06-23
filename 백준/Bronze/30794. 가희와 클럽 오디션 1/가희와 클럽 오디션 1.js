const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const lv = parseInt(input[0], 10);
const judgement = input[1];

let score = 0;

if (judgement === 'miss') {
    score = 0;
} else if (judgement === 'bad') {
    score = 200 * lv;
} else if (judgement === 'cool') {
    score = 400 * lv;
} else if (judgement === 'great') {
    score = 600 * lv;
} else if (judgement === 'perfect') {
    const combo = 1;
    score = combo * 1000 * lv;
}

console.log(score);
