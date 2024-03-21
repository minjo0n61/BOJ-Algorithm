const input = +require("fs").readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString().trim();

let result = [];

for (let i = 1; i < input + 1; i++) {
  result.push(i);
}

while (result.length > 1) {
  let tmp = [];

  for (let i = 1; i < result.length; i += 2) {
    tmp.push(result[i]);
  }
  result = tmp;
}
console.log(...result);