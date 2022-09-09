const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

if (input[0] + input[1] + input[2] >= 100) {
    console.log("OK");
} else {
    if (input[0] < input[1] && input[0] < input[2]) {
        console.log("Soongsil")
    } else if (input[1] < input[0] && input[1] < input[2]) {
        console.log("Korea");
    } else {
        console.log("Hanyang");
    }
}