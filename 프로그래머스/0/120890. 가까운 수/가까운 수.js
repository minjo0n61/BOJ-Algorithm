function solution(array, n) {
  const arr = array.map((el) => [el, Math.abs(el - n)]);
  arr.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  console.log(arr);
  return arr[0][0];
}
