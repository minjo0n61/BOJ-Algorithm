const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(Number);


if (input[1] - input[0] > 30) {
    console.log("You are speeding and your fine is $500.")
}
else if (input[1] - input[0] > 20 && input[1] - input[0] <= 30) {
    console.log("You are speeding and your fine is $270.")
}
else if (input[1] - input[0] > 0 && input[1] - input[0] <= 20) {
    console.log("You are speeding and your fine is $100.")
}
else {
    console.log("Congratulations, you are within the speed limit!");
}