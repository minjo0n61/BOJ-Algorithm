//하샤드 수란 각 자리 합으로 그 수가 나눠지는 수
function solution(x){
    var answer = true;
    let sum =0;
    let arr=x.toString();

    for(let i =0; i<arr.length; i++){
        sum += Number(arr[i]);
    }
    return (x%sum===0)? true: false;
}