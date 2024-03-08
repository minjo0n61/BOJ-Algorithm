function solution(n, t, m, timetable) {
  let answer = 0;
  let firstBusStartTime = 540;
  let lastfirstBusStartTime = firstBusStartTime + (n - 1) * t;
  let times = timetable.map((el) => el.split(":").map(Number)).map((el) => el[0] * 60 + el[1]);
  times.sort((a, b) => a - b);
  // console.log(times);

  let busSchedule = [{ time: 540, man: [] }];
  for (let i = 0; i < n - 1; i++) {
    busSchedule.push({ time: firstBusStartTime + t * (i + 1), man: [] });
  }
  // console.log(busSchedule);

  let count = 0;
  for (let i = 0; i < n; i++) {
    let presentBus = busSchedule[i];
    let presentBusTime = presentBus.time;
    let presentBusMan = presentBus.man;

    for (let j = 0; j < m; j++) {
      if (presentBusTime >= times[count]) {
        presentBusMan.push(times[count]);
        count++;
        if (!times[count] && count < m * n) {
          break;
        }
      }
    }
  }

  let lastBus = busSchedule[busSchedule.length - 1];
  if (lastBus.man.length === m) {
    answer = lastBus.man[lastBus.man.length - 1] - 1;
  }
  if (lastBus.man.length < m) {
    answer = lastBus.time;
  }
  // console.log(lastBus.man[lastBus.man.length - 1] - 1);
  // console.log(lastBus);

  let hour = Math.floor(answer / 60)
    .toString()
    .padStart(2, "0");
  let minute = Math.floor(answer % 60)
    .toString()
    .padStart(2, "0");
  return `${hour}:${minute}`;
}

// let [n, t, m] = [1, 1, 5];
// let timetable = ["08:00", "08:01", "08:02", "08:03"];

// let [n, t, m] = [2, 10, 2];
// let timetable = ["09:10", "09:09", "08:00"];

// let [n, t, m] = [2, 1, 2];
// let timetable = ["09:00", "09:00", "09:00", "09:00"];

// let [n, t, m] = [1, 1, 5];
// let timetable = ["00:01", "00:01", "00:01", "00:01", "00:01"];

// let [n, t, m] = [1, 1, 1];
// let timetable = ["23:59"];

// let [n, t, m] = [10, 60, 45];
// let timetable = [
//   "23:59",
//   "23:59",
//   "23:59",
//   "23:59",
//   "23:59",
//   "23:59",
//   "23:59",
//   "23:59",
//   "23:59",
//   "23:59",
//   "23:59",
//   "23:59",
//   "23:59",
//   "23:59",
//   "23:59",
//   "23:59",
// ];

// console.log(solution(n, t, m, timetable));
