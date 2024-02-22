const stick = () => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  input.shift();
  input = input.map((n) => {
    return parseInt(n);
  });
  let stack = [];

  for (i of input) {
    while (stack.length > 0 && stack[stack.length - 1] <= i) stack.pop();
    stack.push(i);
  }
  console.log(stack.length);
};

stick();