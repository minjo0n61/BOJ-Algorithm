function solution(number, limit, power) {
    let arr = [1];
    let sword = 0;
    let answer = 0;

    for (let i = 2; i <= number; i++) {
        let num = [];
        if (i !== 1) {
            for (let j = 1; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    num.push(j);
                    if(i/j !== j){
                        num.push(i/j);
                    }
                }
            }
        }
        arr.push(num.length);
    }

    for (let i = 0; i < number; i++) {
        if (arr[i] > limit) {
            answer += power;
        } else {
            answer += arr[i];
        }
    }

    return answer;
}