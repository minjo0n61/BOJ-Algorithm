function solution(s) {
  var result = [];
  const number = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let arr = "";
  for (let i = 0; i < s.length; i++) {
    if (isNaN(+s[i])) {
      arr += s[i];
      if (number[arr] || number[arr] === 0) {
        result.push(number[arr]);
        arr = "";
      }
    } else {
      result.push(s[i].toString());
    }
  }
  return +result.join("");
}