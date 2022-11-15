function solution(n, k) {
    if(n>=10){
        return n*12000+2000*(k-Math.floor(n/10));
    }
    return n*12000+2000*k;
}