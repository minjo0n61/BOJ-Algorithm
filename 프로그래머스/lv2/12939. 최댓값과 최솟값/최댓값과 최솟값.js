function solution(s) {
    var answer = '';
    let input = s.split(" ").map(Number);
    let minnum = Math.min(...input);
    let maxnum = Math.max(...input);
    return answer=`${minnum} ${maxnum}`;
}