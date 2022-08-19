function solution(n, m) {
    var answer = [];
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && m % i === 0) {
            arr.push(i)
        }
    }
    let cdgy = arr.pop();
    let cdgb = n * m / cdgy;
    answer.push(cdgy, cdgb)
    return answer;
}