const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testcase = +input.shift();
let answer = '';

for (let i = 0; i < testcase; i++) {
    let candyBro = Math.floor(input[i][0] / input[i][1]);
    let candyPapa = input[i][0] % input[i][1];
    answer += `You get ${candyBro} piece(s) and your dad gets ${candyPapa} piece(s).` + "\n";
}
console.log(answer);