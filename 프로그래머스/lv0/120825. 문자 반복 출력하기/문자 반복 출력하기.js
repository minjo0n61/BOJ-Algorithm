function solution(my_string, n) {
    let str = '';
    for(let i=0; i<my_string.length; i++){
        for(let j=0; j<n; j++){
            str+=my_string[i];
        }
    }
    return str;
}