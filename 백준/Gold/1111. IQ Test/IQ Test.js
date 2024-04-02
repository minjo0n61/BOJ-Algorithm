const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = +input.shift();
const Matrix = input.shift().split(" ").map(Number);

// 이전 숫자 : ax + b
// 다음 숫자 : a(ax + b) + b = a^2x + ab + b

if (N > 2) {
  if (Matrix[1] - Matrix[0] !== 0) {
    let a = (Matrix[2] - Matrix[1]) / (Matrix[1] - Matrix[0]);
    let b = Matrix[1] - Matrix[0] * a;

    // 수를 구할 수 없는 경우
    // 둘 중 하나라도 정수가 아닌 경우
    if (a !== parseInt(a) || b !== parseInt(b)) {
      return console.log("B");
    }

    // 첫째항과 둘째항은 이미 a,b를 찾는데 사용되었음
    // 마지막항 N은 [i+1]에 해당하는 다음 항이 없으므로 제외
    for (let i = 1; i < N - 1; i++) {
      if (Matrix[i] * a + b !== Matrix[i + 1]) {
        return console.log("B");
      }
    }
    console.log(Matrix[N - 1] * a + b);
  } else {
    // 첫번째항과 두번째항이 같을 때 실행됨
    for (let i = 1; i < N - 1; i++) {
      // 두번째항 이후로 모두 동일한지 확인
      if (Matrix[i] !== Matrix[i + 1]) {
        return console.log("B");
      }
    }
    console.log(Matrix[0]);
  }
} else if (N > 1) {
  if (Matrix[0] === Matrix[1]) {
    console.log(Matrix[0]);
  } else {
    console.log("A");
  }
} else {
  console.log("A");
}
