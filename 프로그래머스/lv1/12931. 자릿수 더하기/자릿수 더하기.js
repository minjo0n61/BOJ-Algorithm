function solution(N) {
    let strNum = N.toString();
    let sum =0;
    for (let i =0; i<strNum.length; i++){
        sum += +strNum[i];
    }
    return sum;
}