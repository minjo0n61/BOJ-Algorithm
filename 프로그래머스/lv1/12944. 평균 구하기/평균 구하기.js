function solution(arr) {
    let sum =0;
    for(let i =0; i<arr.length; i++){
        sum+=Number(arr[i]);
    }
    return sum/arr.length;
}