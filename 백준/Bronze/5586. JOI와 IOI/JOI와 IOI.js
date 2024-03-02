let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
let joi = 0;
let ioi = 0;

for (let i = 0; i < input.length; i++) {
	if (input.slice(i, i + 3) === 'JOI') joi++;
	else if (input.slice(i, i + 3) === 'IOI') ioi++;
}

console.log(joi + '\n' + ioi);