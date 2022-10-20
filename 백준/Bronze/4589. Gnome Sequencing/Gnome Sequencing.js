const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let testCase = +input[0];
let sum = "Gnomes:" + "\n";
for (let i = 1; i <= testCase; i++) {
    let line = input[i].split(" ");
    if (line[0] < line[1] && line[1] < line[2]) {
        sum += "Ordered" + "\n";
    }
    else if (line[0] > line[1] && line[1] > line[2]) {
        sum += "Ordered" + "\n";
    }
    else {
        sum += "Unordered" + "\n";
    }
}

console.log(sum.trim());