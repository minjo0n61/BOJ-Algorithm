function solution(my_string, n) {
    return my_string.split("").reduce((pv,cv)=>pv+cv.repeat(n),'')
}