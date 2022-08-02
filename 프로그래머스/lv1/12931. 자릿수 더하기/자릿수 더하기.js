function solution(n)
{
    let answer = 0;
    let arr = n.toString();
    let sum =0;
    for(let i = 0; i<arr.length; i++){
        sum += Number(arr[i]);
    }

    return answer=sum;
}