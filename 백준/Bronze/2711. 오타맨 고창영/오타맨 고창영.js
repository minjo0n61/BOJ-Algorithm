let fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
	.toString()
	.split("\n");

for (let i = 1; i <= +input[0]; i++) {
	let word = input[i].split(" ");
	word[1] = word[1].split("");
	word[1].splice(+word[0] - 1, 1);
	console.log(word[1].join(''));
}