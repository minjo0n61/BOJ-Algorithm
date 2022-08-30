const input = require('fs').readFileSync('/dev/stdin');
const x = Number(input)
let sum = 0;

for (let j = 1; ; j++) {
    sum += j;
    if (sum >= x) {
        var i = j;
        break;
    }
}

let n = x - (sum - i)
if (i % 2 === 0) {
    console.log(`${n}/${i + 1 - n}`)
}
if (i % 2 !== 0) {
    console.log(`${i + 1 - n}/${n}`)
}
