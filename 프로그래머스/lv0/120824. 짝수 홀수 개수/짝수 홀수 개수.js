function solution(num_list) {
    let arr =[0,0];
    num_list.forEach(el=>{
        if(el%2!==0){
            arr[1]++;
        }else{
            arr[0]++;
        }
    })
    return arr;
}