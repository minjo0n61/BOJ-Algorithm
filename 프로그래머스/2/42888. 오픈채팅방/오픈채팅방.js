function solution(record) {
  const answer = [];
  const result = [];
  const userData = {};
  for (let i = 0; i < record.length; i++) {
    const data = [...record[i].split(" ")];

    if (data[0] === "Enter") {
      userData[data[1]] = data[2];
      answer.push(`${data[1]}님이 들어왔습니다.`);
    } else if (data[0] === "Leave") {
      answer.push(`${data[1]}님이 나갔습니다.` );
    }else{
      userData[data[1]] = data[2];
    }
  }

  for (let i = 0; i < answer.length; i++) {
    const data = [...answer[i].split(" ")];
    const dataKey = data[0].slice(0, -2);
    const replaceValue = answer[i].replace(dataKey, userData[dataKey]);
    result.push(replaceValue);
  }
  return result;
}
