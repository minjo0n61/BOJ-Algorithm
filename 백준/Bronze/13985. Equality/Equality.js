const input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
if (+input[0] + (+input[2]) === +input[4]) {
    console.log("YES");
} else {
    console.log("NO");
}