function solution(numbers, target) {
  let count = 0;
  let stack = [[0, 0]];

  while (stack.length > 0) {
    const [sum, i] = stack.pop();

    if (i === numbers.length) {
      if (sum === target) {
        count++;
      }
    } else {
      stack.push([sum + numbers[i], i + 1]);
      stack.push([sum - numbers[i], i + 1]);
    }
  }

  return count;
}