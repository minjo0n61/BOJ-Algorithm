function solution(numbers) {
    var answer = 0;
    let arr = [0,1,2,3,4,5,6,7,8,9];
    numbers.sort((a,b)=>a-b);
    for(let i=0; i<=9; i++){
        arr.splice(numbers[i],1,0);
    }
    return arr.reduce((a,b)=>a+b,0);
}