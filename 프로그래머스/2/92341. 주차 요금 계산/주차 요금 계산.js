function solution(fees, records) {
  let totalTimes = calculateTotalTimes(records);
  let answer = Object.keys(totalTimes)
    .sort((a, b) => a - b)
    .map((carNumber) => calculateFee(fees, totalTimes[carNumber]));
  return answer;
}

function makeMinute(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function calculateFee(fees, totalMinutes) {
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  if (totalMinutes <= basicTime) return basicFee;
  return basicFee + Math.ceil((totalMinutes - basicTime) / unitTime) * unitFee;
}

function calculateTotalTimes(records) {
  let recordsObj = {};

  records.forEach((record) => {
    const [time, carNumber, status] = record.split(" ");
    const minutes = makeMinute(time);
    if (!recordsObj[carNumber]) recordsObj[carNumber] = [];
    recordsObj[carNumber].push({ minutes, status });
  });

  let totalTimes = {};

  for (const carNumber in recordsObj) {
    const lastRecord = recordsObj[carNumber][recordsObj[carNumber].length - 1];
    if (lastRecord.status === "IN") {
      recordsObj[carNumber].push({ minutes: makeMinute("23:59"), status: "OUT" });
    }

    let totalTime = 0;
    for (let i = 0; i < recordsObj[carNumber].length; i += 2) {
      totalTime += recordsObj[carNumber][i + 1].minutes - recordsObj[carNumber][i].minutes;
    }
    totalTimes[carNumber] = totalTime;
  }

  return totalTimes;
}