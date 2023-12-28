function solution(targets) {
    var answer = 0;
//     최소한의 요격 미사일을 발사해야 한다.
//     1. 오름차순으로 정렬
    const sortedTargets = [...targets].sort((a,b)=>a[1]-b[1])
    
//     가장 먼저 끝나는 점 : 4.
//     시작점이 4이전꺼라면 이거 하나로 흡수
    // 1차 정렬 : 시작점을 기준으로 오름차순, 2차 정렬 : 끝점을 기준으로 내림차순
//     시작점으로 오름차순 정렬 > 끝점으로 오름차순 정렬
    
    let donePoint = 0;
    let sum = 0;
    for(const target of sortedTargets){
        const [startPoint,endPoint] = target;
        
        if(startPoint<donePoint) continue;
        sum ++;
        donePoint = endPoint;
    }
    
    
    // let endPoint = sortedTargets[0][1];
    
    
    
    
    return sum;
}