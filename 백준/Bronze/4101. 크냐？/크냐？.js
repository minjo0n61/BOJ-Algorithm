const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ").map(Number);
    if (line[0] === 0 && line[1] === 0) {
        break;
    }
    if (line[0] > line[1]) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}