const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const sentences = input.slice(1);

const transformedSentences = sentences.map(sentence => {
    const words = sentence.split(' ');
    const firstTwoWords = words.splice(0, 2);
    return [...words, ...firstTwoWords].join(' ');
});

transformedSentences.forEach(sentence => console.log(sentence));
