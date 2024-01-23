let [N, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
N = +N;
arr = arr.split(" ").map(Number);
let top = 0; // 스택의 맨 위를 가리키는 변수
let cur = 1; // 현재 기대값
const stack = []; // 순서가 아닌 사람들 임시 저장
let output = '';

arr.forEach((e) => {
  while (stack[top-1] === cur) {
    stack.pop();
    top--;
    cur++;
  }

  if (e !== cur) {
    stack.push(e);
    top++;
  } else {
    cur++;
  }
});

while (stack.pop() === cur) {
  top--;
  cur++;
}

top === 0 ? (output = 'Nice') : (output = 'Sad');
console.log(output);