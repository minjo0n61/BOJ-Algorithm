const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
	input.push(BigInt(line));
}).on("close", function () {
    for(let i = 1; i < input.length; i++) {
    	if(Number(String(input[i]).slice(-1)) % 2 === 0) {
    		console.log('even');
    	}
    	else console.log('odd');
    }
	process.exit();
});