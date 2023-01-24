const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
for (let i = 0; i < 3; i++) {
    let count = 0;
    for (let j = 0; j < 4; j++) {
        if (input[i][j] === 0) {
            count++;
        }
    }
    traditionplay(count);
}
function traditionplay(num) {
    switch (num) {
        case 1:
            console.log("A");
            break;
        case 2:
            console.log("B");
            break;
        case 3:
            console.log("C");
            break;
        case 4:
            console.log("D");
            break;
        case 0:
            console.log("E");
            break;
    }
}