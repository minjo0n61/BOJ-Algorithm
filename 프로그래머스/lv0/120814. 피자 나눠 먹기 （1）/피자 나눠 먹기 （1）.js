function solution(n) {
    return Math.floor(n%7)!==0?Math.floor(n/7)+1:n/7;
}