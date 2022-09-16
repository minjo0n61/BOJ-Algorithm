function solution(x) {
    let answer = true;
    let sum = 0;
    let strNum = x.toString().split("");
    for(let i =0;i<strNum.length; i++){
        sum+=Number(strNum[i]);
    }
    if(x%sum===0){
        return answer = true;
    }else{
        return answer =false;
    }
}