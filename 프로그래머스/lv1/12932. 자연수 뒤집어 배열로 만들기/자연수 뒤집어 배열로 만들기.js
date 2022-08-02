function solution(n) {
    let answer = [];
    let arr = n.toString();
    
    for (let i=arr.length;i>0;i--){
        answer.push(parseInt(arr.substr((i-1),1)));
    }
    return answer;
}