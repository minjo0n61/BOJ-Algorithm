// 아이디 3자 이상 15자 이하

// 아이디는 알파벳 소문자 숫자 뺴기,밑줄, 마침표 문자만 사용 가능

// 단 마침표는 처음과 끝에 사용할 수 없고 연속으로 사용 불가능

// new_id
// 1. 모든 대문자를 대응되는 소문자로 치환 lowerCase
// 2. 알파벳 소문자, 숫자, 빼기- , 밑줄_, 마침표 . 를 제외한 모든 문자를 제거합니다.
// 3. 마침표가 2번 이상 연속으로 나오는 부분을 하나의 마침표. 로 치환합니다.
// 4. 마침표가 처음이나 끝에 위치한다면 제거합니다.
// 5. 빈 문자열이라면, new_id에 'a'를 대입한다.
// 6. 길이가 16자 이상이면, new_id를 15자까지만 사용하고 뒤는 삭제
//   만약 자르고 나서 마침표가 끝에 위치한다면 끝에 마침표 제거합니다
// 7. 길이가 2자 이하라면, 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

function solution(new_id) {
  // 1. 모든 대문자를 대응되는 소문자로 치환 lowerCase
  new_id = new_id.toLowerCase();

  // 2. 알파벳 소문자, 숫자, 빼기- , 밑줄_, 마침표 . 를 제외한 모든 문자를 제거합니다.
  let str = "";
  for (let i = 0; i < new_id.length; i++) {
    let checkStr = new_id[i];
    if (
      (checkStr >= "a" && checkStr <= "z") ||
      (checkStr >= "0" && checkStr <= "9") ||
      checkStr === "-" ||
      checkStr === "_" ||
      checkStr === "."
    ) {
      str += checkStr;
    }
  }
  new_id = str;

  // 3. 마침표가 2번 이상 연속으로 나오는 부분을 하나의 마침표. 로 치환합니다.
  str = "";
  let previousCheckStr = "";
  for (let i = 0; i < new_id.length; i++) {
    let checkStr = new_id[i];
    let previousCheckStr = new_id[i-1]
    if (checkStr === "." && previousCheckStr === ".") {
      continue;
    }
    str += checkStr;
    previousCheckStr = checkStr;
  }
  new_id = str;

  // 4. 마침표가 처음이나 끝에 위치한다면 제거합니다.
  if (new_id.length > 0 && new_id[0] === ".") {
    new_id = new_id.substring(1);
  }
  if (new_id.length > 0 && new_id[new_id.length - 1] === ".") {
    new_id = new_id.substring(0, new_id.length - 1);
  }

  // 5. 빈 문자열이라면, new_id에 'a'를 대입한다.
  if (new_id === "") {
    new_id = "a";
  }

  // 6. 길이가 16자 이상이면, new_id를 15자까지만 사용하고 뒤는 삭제
  //   만약 자르고 나서 마침표가 끝에 위치한다면 끝에 마침표 제거합니다
  if (new_id.length >= 16) {
    new_id = new_id.substring(0, 15);
    if (new_id[new_id.length - 1] === ".") {
      new_id = new_id.substring(0, new_id.length - 1);
    }
  }

  // 7. 길이가 2자 이하라면, 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  while (new_id.length < 3) {
    new_id += new_id[new_id.length - 1];
  }

  return new_id;
}
