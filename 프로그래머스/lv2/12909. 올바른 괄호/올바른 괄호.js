function solution(s){ 
    let cnt = 0;

    for (let i=0; i<s.length; i++) {
        s[i] === "(" ? cnt ++ : cnt --;
        if (cnt < 0) {
            break;
        }
    }
    return cnt === 0 ? true : false
}