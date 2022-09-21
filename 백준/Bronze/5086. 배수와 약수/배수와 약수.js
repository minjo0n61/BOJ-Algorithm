const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ").map(Number);
    if (line[0] === 0 && line[1] === 0) {
        break;
    }
    else if (line[1] % line[0] === 0) {
        console.log("factor");
    }
    else if (line[0] % line[1] === 0) {
        console.log("multiple");
    }
    else {
        console.log("neither")
    }
}