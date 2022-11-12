function solution(numbers) {
    let sum = numbers.reduce((past,current)=>past+current,0);
    return sum/numbers.length;
}