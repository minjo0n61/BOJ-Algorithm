const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const testcase = Number(input[0]);

for (let i = 1; i <= testcase; i++) {
    let line = input[i].split(" ").map(Number);
    if (line[2] % line[0] !== 0) {
        let floor = line[2] % line[0];
        let room = Math.ceil(line[2] / line[0]);
        console.log(room < 10 ? `${floor}0${room}` : `${floor}${room}`);
    }
    if (line[2] % line[0] === 0) {
        let floor = line[0];
        let room = Math.ceil(line[2] / line[0]);
        console.log(room < 10 ? `${floor}0${room}` : `${floor}${room}`);
    }

}