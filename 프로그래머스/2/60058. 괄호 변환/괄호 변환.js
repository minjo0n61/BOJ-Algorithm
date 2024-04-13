function solution(p) {
  let answer = "";
  let left = 0;
  let right = 0;
  let stack = [];

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      stack.push(p[i]);
      left++;
    } else {
      right++;
      if (stack.length) stack.pop();
    }

    if (left === right) {
      if (!stack.length) {
        answer += p.slice(0, i + 1);

        answer += solution(p.slice(i + 1));
        break;
      } else {
        answer += "(";
        answer += solution(p.slice(i + 1));
        answer += ")";

        for (let j = 1; j < i; j++) {
          answer += p[j] === "(" ? ")" : "(";
        }
        break;
      }
    }
  }

  return answer;
}