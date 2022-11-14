function solution(my_string) {
    let str ='';
    for(let i=my_string.length-1; i>=0; i--){
        str+=my_string[i];
    }
    return str;
}