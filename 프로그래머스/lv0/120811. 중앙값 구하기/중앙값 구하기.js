function solution(array) {
    array.sort((a,b)=>a-b);
    var answer = array[parseInt(array.length/2)];
    return answer;
}