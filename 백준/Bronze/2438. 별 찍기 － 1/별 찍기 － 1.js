const fs=require('fs');
const input=fs.readFileSync('/dev/stdin').toString();

const line_num = parseInt(input);

for (var i = 1; i <= line_num; i++) {
    console.log("*".repeat(i));
}