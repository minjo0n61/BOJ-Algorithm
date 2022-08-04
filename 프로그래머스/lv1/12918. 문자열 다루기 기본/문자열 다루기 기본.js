function solution(s){
    let answer = true;
    let arr = s.toString().split("");
    if(s.length===4 || s.length===6){
        for(let i=0;i<arr.length;i++){
            if(isNaN(Number(arr[i]))===true){return false;}
        }
    }else{return false;}
    return answer;
}