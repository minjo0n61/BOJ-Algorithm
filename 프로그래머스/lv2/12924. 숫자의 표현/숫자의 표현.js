function solution(n) {
    let answer = 0;
    let sum=0;
    for(let i =1; i<=n; i++){
        for(let j=i; j<=n; j++){
            sum += j;
            if(sum === n){
                answer += 1;
                sum=0;
                break;
            }
            if(sum>n){
                sum=0;
                break;
            }
        }
    }
    
    return answer;
}