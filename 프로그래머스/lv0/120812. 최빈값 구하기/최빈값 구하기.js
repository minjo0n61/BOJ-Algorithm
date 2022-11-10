function solution(array) {
    if(array.length===1){return array[0]}
    let choibinObj = array.reduce((obj,el)=>{
        obj[el]?(obj[el]=++obj[el]):(obj[el]=1);
        return obj
    },{})
    
    const items = Object.keys(choibinObj).map((key)=>[
        Number(key), choibinObj[key]
    ]).sort((a,b)=>b[1]-a[1])
    
    if(items[0][1]===items?.[1]?.[1]){
       return -1;
       }
    
    return items[0][0];
}

// 최빈값 구하는 방법
// 배열의 길이가 1이면 array[0]을 출력한다.
// 각 배열을 돌면서(reduce, forEach 사용 가능) obj의 key값 존재하면 해당 value값 +1 아니면 새로운 key값에 value값 1로 생성
// obj 배열로 만들기
// 빈도수 별로 정렬
// 정렬 후 최빈값 2개 이상이면 -1 출력
// 최빈값 1개면 해당 최빈값 출력