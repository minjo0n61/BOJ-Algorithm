const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0], 10);
const results = [];

for (let i = 1; i <= T; i++) {
  const [height, weight] = input[i].split(' ').map(Number);
  let grade;

  if (height < 140.1) {
    grade = 6;
  } else if (height < 146) {
    grade = 5;
  } else if (height < 159) {
    grade = 4;
  } else if (height < 161) {
    const BMI = weight / ((height / 100) ** 2);
    if (BMI >= 16.0 && BMI < 35.0) {
      grade = 3;
    } else {
      grade = 4;
    }
  } else if (height < 204) {
    const BMI = weight / ((height / 100) ** 2);
    if (BMI >= 20.0 && BMI < 25.0) {
      grade = 1;
    } else if ((BMI >= 18.5 && BMI < 20.0) || (BMI >= 25.0 && BMI < 30.0)) {
      grade = 2;
    } else if ((BMI >= 16.0 && BMI < 18.5) || (BMI >= 30.0 && BMI < 35.0)) {
      grade = 3;
    } else {
      grade = 4;
    }
  } else {
    grade = 4;
  }

  results.push(grade);
}

results.forEach(result => console.log(result));
