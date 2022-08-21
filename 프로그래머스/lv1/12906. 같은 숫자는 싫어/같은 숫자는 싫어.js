function solution(arr)
{
    let answer = [arr[0]];
    for(let i =0; i<arr.length-1; i++){
        if(arr[i]!==arr[i+1]){
            answer.push(arr[i+1]);
        }
    }
    return answer;
}