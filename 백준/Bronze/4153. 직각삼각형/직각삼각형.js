const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ").map(Number);
    line.sort((a, b) => a - b);
    if (line[0] + line[1] + line[2] == 0) {
        break;
    }
    if (line[0] * line[0] + line[1] * line[1] === line[2] * line[2]) {
        console.log("right");
    } else {
        console.log("wrong");
    }
}