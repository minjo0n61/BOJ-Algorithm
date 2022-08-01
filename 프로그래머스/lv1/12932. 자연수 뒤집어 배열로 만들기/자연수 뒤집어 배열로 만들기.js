//자연수 n을 뒤집어서 거꾸로 배열에 삽입

function solution(n){
    let answer =[];
    let arr = n.toString();

    for(let i=arr.length; i>0;i--){
        answer.push(parseInt(arr.substr((i-1),1)));
    }
    return answer;
}