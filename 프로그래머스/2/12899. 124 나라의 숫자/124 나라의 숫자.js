function solution(n) {
    let answer = '';
    const num=[4,1,2];
    
    while(n>0){
        answer = num[n%3]+answer;
        n%3===0?n=n/3-1:n=Math.trunc(n/3);
    }
    return answer;
}


/**
1   1   1
2   2   2
3   10  4
4   11  11
5   12  12
6   20  14
7   21  21
8   22  22
9   100 24
10  101 41
*/