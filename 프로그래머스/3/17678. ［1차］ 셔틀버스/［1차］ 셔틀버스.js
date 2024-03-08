function solution(n, t, m, timetable) {
  let ans;
  time = [];
  const lastTimeMinute = Number(9 * 60 + (n - 1) * t);
  for (let i of timetable) {
    const x = Number(i.slice(0, 2)) * 60 + Number(i.slice(3, 5));
    if (lastTimeMinute >= x) {
      time.push(x);
    }
  }
  time.sort((a, b) => a - b);

  let p = 0;
  let count = 0;
  let busTime = 9 * 60;
  let timeStamp;

  while (busTime <= lastTimeMinute && p < timetable.length) {
    if (time[p] <= busTime && count < m) {
      if (busTime === lastTimeMinute && count === m - 1) {
        timeStamp = time[p];
        break;
      }
      count += 1;
      p += 1;
    } else {
      busTime += t;
      count = 0;
    }
  }

  if (timeStamp) {
    ans = timeStamp - 1;
  } else {
    ans = lastTimeMinute;
  }

  let hour = parseInt(ans / 60);
  let minute = ans % 60;
  if (hour < 10) hour = "0" + String(hour);
  if (minute < 10) minute = "0" + String(minute);
  return `${hour}:${minute}`;
}
