function solution(dartResult) {
  let str = [0, ...dartResult.match(/\d{1,2}[SDT][*#]?/g)];

  console.log(str);
  let arr = [];
  for (let i = 1; i <= 3; i++) {
    if (str[i].includes("*") || str[i].includes("#")) {
      if (!isNaN(+str[i][1])) {
        arr.push(Math.pow(10, checkBonus(str[i][2])));
        arr = checkOption(str[i][3], arr, i);
      } else {
        arr.push(Math.pow(+str[i][0], checkBonus(str[i][1])));
        arr = checkOption(str[i][2], arr, i);
      }
    } else {
      if (!isNaN(+str[i][1])) {
        arr.push(Math.pow(10, checkBonus(str[i][2])));
      } else {
        arr.push(Math.pow(+str[i][0], checkBonus(str[i][1])));
      }
    }
  }
  return arr.reduce((a, b) => a + b, 0);
}
function checkBonus(sdt) {
  if (sdt === "S") return 1;
  if (sdt === "D") return 2;
  if (sdt === "T") return 3;
}
function checkOption(option, arr, num) {
  if (option === "*") {
    arr[num - 1] = arr[num - 1] * 2;
    arr[num - 2] = arr[num - 2] * 2;
  }
  if (option === "#") {
    arr[num - 1] = -arr[num - 1];
  }
  return arr;
}