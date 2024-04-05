function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const queue = [[0, 0]];

  if (maps[n - 1][m - 1] === 0) {
    return -1;
  }
  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1) {
        maps[nx][ny] = maps[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  if (maps[n - 1][m - 1] === 1) {
    return -1;
  }
  return maps[n - 1][m - 1];
}
