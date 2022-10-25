const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
	input.push(line.toString());
}).on("close", function () {
	input = input.map((el) => Number(el));
    input.sort((a, b) => a - b);
let sum = input.reduce((past, curr) => past + curr, 0);

console.log(sum / 5 + "\n" + input[2]);
	process.exit();
});