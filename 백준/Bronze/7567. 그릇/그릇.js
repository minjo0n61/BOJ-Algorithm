const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input;
rl.on("line", function (line) {
	input = line.toString().split("");
}).on("close", function () {
	let cm = 10;
	let dish = input.shift();
	while (true) {
		if (input[0] === dish) {
			cm += 5;
			input.shift();
		} else {
			cm += 10;
			dish = input.shift();
		}
		if (input.length === 0) break;
	}
	console.log(cm);
	process.exit();
});