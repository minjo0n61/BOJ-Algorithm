const input = require('fs').readFileSync("/dev/stdin").toString().split("\n");
const account = input[0].split(" ").map(Number);
const chicken = +input[1];

if (account[0] + account[1] - chicken * 2 >= 0) {
    console.log(account[0] + account[1] - chicken * 2);
} else {
    console.log(account[0] + account[1]);
}