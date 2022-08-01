function solution(n) {
    let answer = 0;
    let sum = 0;
    
    for (let i = 1; i<=n; i++){
        if(n%i===0){
            sum += Number(i);
        }
    }
    return answer=sum;
}