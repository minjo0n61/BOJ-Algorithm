function solution(n) {
    var answer = [];
    let strNum = n.toString().split("");
    for(let i =strNum.length-1; i>=0;i--){
        answer.push(Number(strNum[i]));
    }
    return answer;
}