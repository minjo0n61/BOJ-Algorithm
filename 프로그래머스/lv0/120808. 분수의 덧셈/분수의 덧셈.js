function solution(denum1, num1, denum2, num2) {
    let bottomNum = num1*num2;
    let topNum = denum1*num2+denum2*num1;
    let divideNum =1;
    for(let i =1; i<=Math.max(bottomNum, topNum); i++){
        if(topNum%i===0 && bottomNum%i===0){
            divideNum=i
        }
    }
    
    let answer = [topNum/divideNum, bottomNum/divideNum];
    return answer;
}