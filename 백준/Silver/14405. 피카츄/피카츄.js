const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let i = 0;
while (i < input.length) {
  if (input.substring(i, i + 2) === "pi") {
    i += 2;
  } else if (input.substring(i, i + 2) === "ka") {
    i += 2;
  } else if (input.substring(i, i + 3) === "chu") {
    i += 3;
  } else {
    console.log("NO");
    return;
  }
}

console.log("YES");