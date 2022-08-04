function solution(x) {
    let sum =0;
    let strNum=x.toString()
    for(let i =0;i<strNum.length;i++){sum += +strNum[i];}
    return x%sum===0?true:false;
}