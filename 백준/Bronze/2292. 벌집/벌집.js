const input = require('fs').readFileSync('/dev/stdin');

function bee(n) {
    let num = 1;
    let range = 1;
    while (num < n) {
        num += 6 * range;
        range++;
    }
    return range
}
console.log(bee(input));