function solution(absolutes, signs) {
    let arr = [];
    for(let i=0; i<absolutes.length; i++){
        if(signs[i]===true){
            arr.push(absolutes[i]);
        }else{
            arr.push(-absolutes[i]);
        }
    }
    return arr.reduce((a,b)=>a+b,0);
}