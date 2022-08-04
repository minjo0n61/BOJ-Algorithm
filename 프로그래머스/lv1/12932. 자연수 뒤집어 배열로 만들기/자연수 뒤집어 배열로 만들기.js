function solution(n) {
    let strNum = n.toString();
    let arr = [];
    for (let i = strNum.length; i > 0; i--) {
        arr.push(parseInt(strNum.substr((i - 1), 1)));
    }
    return arr;
}