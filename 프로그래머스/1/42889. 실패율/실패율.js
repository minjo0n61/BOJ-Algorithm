function solution(N, stages) {
  let arr = Array(N)
    .fill()
    .map((_, i) => [i + 1, 0]);

  let num = stages.length;

  for (let i = 1; i <= N; i++) {
    let count = stages.filter((el) => el === i).length;
    arr[i - 1][1] = count / num;
    num -= count;
  }
  arr.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
  
  return arr.map((el) => el[0]);
}