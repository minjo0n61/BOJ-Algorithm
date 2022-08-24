function solution(n, m) {
    var answer = [];
    function gcd(a,b){
        if(b===0){return a;}
        return gcd(b,a%b);
    }
    return answer=[gcd(n,m),n*m/gcd(n,m)];
}