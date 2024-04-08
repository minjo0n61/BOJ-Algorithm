function solution(n, arr1, arr2) {
  const arr = [];

  for(let i = 0; i < n; i++) {
    let str = '';
    const bin1 = arr1[i].toString(2).padStart(n, '0');
    const bin2 = arr2[i].toString(2).padStart(n, '0');
    
    for(let j = 0; j < n; j++) {
      if(bin1[j] === '1' || bin2[j] === '1') {
        str += '#';
      } else {
        str += ' ';
      }
    }
    arr.push(str);
  }

  return arr;
}