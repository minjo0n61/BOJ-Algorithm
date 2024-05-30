const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, L, D] = input;

const totalTime = (L + 5) * N - 5;

for (let i = D; i <= totalTime; i += D) {
  const songIndex = Math.floor(i / (L + 5));
  const timeInSong = i % (L + 5);

  if (timeInSong >= L) {
    console.log(i);
    return;
  }
}

console.log(Math.ceil(totalTime / D) * D);