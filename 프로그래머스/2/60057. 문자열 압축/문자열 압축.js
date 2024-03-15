function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let string = "";
    let count = 1;
    let cutString = s.substring(0, i);
    let idx = 0;

    for (idx = i; idx <= s.length; idx += i) {
      let nextString = s.substring(idx, i + idx);

      if (cutString === nextString) {
        count += 1;
      } else {
        if (count === 1) {
          string = string + cutString;
        } else {
          string = string + count + cutString;
        }

        count = 1;
        cutString = nextString;
      }
    }
    if (count === 1) {
      string = string + cutString;
    } else {
      string = string + count + cutString;
    }
    answer = Math.min(answer, string.length);
  }

  return answer;
}