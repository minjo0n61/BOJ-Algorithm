function solution(n, m) {
    var answer = [];
    function getGcd(a,b){
        if(b===0){return a}
        return getGcd(b,a%b);
    }
    answer.push(getGcd(n,m),n*m/getGcd(n,m));
    return answer;
}