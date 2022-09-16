function solution(s) {
    var answer = '';
    let strNum = s.split(" ").map(Number);
    answer += Math.min(...strNum)+" "+Math.max(...strNum)
    return answer;
}