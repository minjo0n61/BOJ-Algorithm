const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let jcan = input[0];
let Dwant = input[1];

if(jcan.length >= Dwant.length){console.log("go");}
else{console.log("no");}
