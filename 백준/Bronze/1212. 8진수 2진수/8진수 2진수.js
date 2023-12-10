const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("").reverse();
let ans = [];

if(input.length === 1 && input[0] === "0"){
    console.log(0);
} else {
    for(let i = 0; i < input.length; i++){
        let octal = input[i];
        ans.push(parseInt(octal, 8).toString(2).padStart(3,0));
    }
    ans.reverse();
    let ansString = ans.join("");
    while(ansString[0] === "0"){
        ansString = ansString.split("");
        ansString.shift();
        ansString = ansString.join("");
    }
    console.log(ansString);
}