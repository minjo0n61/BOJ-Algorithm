function solution(my_string) {
  var answer = 0;
  let arr = [];

  for (let i = 0; i < my_string.length; i++) {
    let num = [];
    if (!isNaN(my_string[i])) {
      num.push(my_string[i]);
      let idx = 1;
      while (true) {
        if (!isNaN(my_string[i + idx])) {
          num.push(my_string[i + idx]);
          i++;
        } else {
          break;
        }
      }
      arr.push(+num.join(""));
    }
  }
  return (answer = arr.reduce((a, b) => a + b, 0));
}