function solution(targets) {
    var answer = 1;
//     1. [s,e]에서 s를 기준으로 정렬
    const sortedTargets = targets.sort((a,b) => b[0]-a[0]);
    
    let checkPoint = sortedTargets[0][0];
    for(let i=1;i<sortedTargets.length;i++){
        const [start,end] = sortedTargets[i];
        if(checkPoint>=end) {
            checkPoint = start;
            answer++;
        }
    }
    
    
    return answer;
}