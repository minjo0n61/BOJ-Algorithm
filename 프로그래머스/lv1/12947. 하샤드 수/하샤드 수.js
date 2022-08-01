function solution(x) {
    let answer = true;
    let arr = x.toString()
    let sum =0;
    
    for (let i = 0; i<arr.length; i++){
        sum += Number(arr[i])
    }
    return answer=(x%sum===0)?true:false;
}