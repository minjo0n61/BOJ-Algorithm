const N = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

for (let i = 0; i < 2 * N; i++) {
  console.log("@".repeat(N) + "   ".repeat(N) + "@".repeat(N));
}
for (let i = 0; i < N; i++) {
  console.log("@".repeat(5 * N));
}
for (let i = 0; i < N; i++) {
  console.log("@".repeat(N) + "   ".repeat(N) + "@".repeat(N));
}
for (let i = 0; i < N; i++) {
  console.log("@".repeat(5 * N));
}
