const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const votes = input[1].split(' ').map(Number);
const cnt = new Array(N).fill(0);

for (let i = 0; i < votes.length; i++) {
    if (votes[i] === 0) {
        continue;
    } else {
        cnt[votes[i] - 1]++;
    }
}

const maxCount = Math.max(...cnt);
const maxCountOccurrences = cnt.filter(count => count === maxCount).length;

if (maxCountOccurrences >= 2 || maxCount === 0) {
    console.log('skipped');
} else {
    console.log(cnt.indexOf(maxCount) + 1);
}
