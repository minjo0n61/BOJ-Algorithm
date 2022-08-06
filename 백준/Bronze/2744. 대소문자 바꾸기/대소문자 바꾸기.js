const input = require('fs').readFileSync('/dev/stdin').toString();
let change = '';

for (let i = 0; i < input.length; i++) {
    if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
        change += input[i].toLowerCase();
    } else if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
        change += input[i].toUpperCase();
    }
}

console.log(change);