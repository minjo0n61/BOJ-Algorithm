function solution(n)
{
    var answer = 0;
    let arr = n.toString();
    let sum =0;
    
    for (let i =0;i<arr.length;i++){
        sum += Number(arr[i]);
    }
    return sum;
}