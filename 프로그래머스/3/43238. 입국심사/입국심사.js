function solution(n, times) {
    //0에서 최장 걸리는 시간까지 범위로 지정
    let shortestTime = 0;
    times.sort((a,b)=>a-b);
    let longestTime = times[times.length-1] * n;
    
    // 반씩 잘라서 계산하다가 해당 범위를 넘는 경우가 나오면 멈추기
    while(shortestTime<=longestTime){
        //가운데 자르기
        const half = Math.floor((shortestTime+longestTime)/2);
        //half 시간을 각 심사관 시간으로 나눈 수를 더한 그 값은 처리 가능한 사람의 수
        //그 값을 n과 비교
        let sum = 0;
        for(let i=0; i<times.length; i++){
            sum += Math.floor(half/times[i]);
        }
        if(sum<n){
            shortestTime = half+1;
        }else{
            longestTime = half-1;
        }
    }
    
    return shortestTime;
}