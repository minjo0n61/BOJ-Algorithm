const input = require("fs").readFileSync("/dev/stdin");

for (let i = 1; i <= Number(input); i++) {
    console.log(`Hello World, Judge ${i}!`)
}