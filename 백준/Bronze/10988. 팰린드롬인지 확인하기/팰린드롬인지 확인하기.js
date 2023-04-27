const str = require("fs").readFileSync(0).toString().trim();
const rev = str.split("").reverse().join("");
const o = str == rev ? 1 : 0;
console.log(o);