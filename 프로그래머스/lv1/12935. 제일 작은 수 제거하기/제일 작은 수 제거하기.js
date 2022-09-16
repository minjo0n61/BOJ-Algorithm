function solution(arr) {
    var answer = [];
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    if(arr.length===0){return answer=[-1]}
    return answer=arr;
}