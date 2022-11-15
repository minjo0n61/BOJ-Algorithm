function solution(my_string, letter) {
    if(my_string.includes(letter)){
        return my_string.replaceAll(letter,"");
    }
}