function solution(num_list) {
    let arr =[];
    for(let i=num_list.length-1; i>=0; i--){
        arr.push(num_list[i]);
    }
    return arr;
}