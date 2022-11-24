const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testcase = +input.shift();
let answer = [];
for (let i = 0; i < testcase; i++) {
    let score1 = 0;
    let score2 = 0;
    let game = [];
    for (let j = 0; j < 9; j++) {
        game.push(input.shift());
        score1 += game[j][0]
        score2 += game[j][1]
    }
    if (score1 > score2) {
        answer.push("Yonsei");
    } else if (score1 < score2) {
        answer.push("Korea");
    } else {
        answer.push("Draw");
    }
}

console.log(answer.join("\n"));