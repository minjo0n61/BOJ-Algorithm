function solution(numbers, hand) {
  let answer = "";
  const positions = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let leftPosition = positions["*"];
  let rightPosition = positions["#"];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if ([1, 4, 7].includes(num)) {
      answer += "L";
      leftPosition = positions[num];
      continue;
    }
    if ([3, 6, 9].includes(num)) {
      answer += "R";
      rightPosition = positions[num];
      continue;
    }

    const numPos = positions[num];
    const leftDist = Math.abs(numPos[0] - leftPosition[0]) + Math.abs(numPos[1] - leftPosition[1]);
    const rightDist = Math.abs(numPos[0] - rightPosition[0]) + Math.abs(numPos[1] - rightPosition[1]);

    if (leftDist < rightDist || (leftDist === rightDist && hand === "left")) {
      answer += "L";
      leftPosition = numPos;
    } else {
      answer += "R";
      rightPosition = numPos;
    }
  }

  return answer;
}