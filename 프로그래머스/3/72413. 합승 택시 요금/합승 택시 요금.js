function solution(n, s, a, b, fares) {
    const distanceArray = Array.from(new Array(n+1),() => new Array(n+1).fill(Infinity));
    
    for(const [a,b,distance] of fares){
        distanceArray[a][b] = distance;
        distanceArray[b][a] = distance;
    }
    for(let i=1;i<=n;i++) distanceArray[i][i] = 0;
    
    // 각 점으로 가는 최단 경로를 구한다.
    for(let k=1;k<=n;k++){
        for(let i=1;i<=n;i++){
            for(let j=1;j<=n;j++){
                distanceArray[i][j] = Math.min(distanceArray[i][j], distanceArray[i][k] + distanceArray[k][j])
            }
        }
    }
    
    // 특정 점까지 동반한다고 했을 경우, 최소값을 구한다.
    let answer = Infinity;
    for(let i=1;i<=n;i++){
        answer = Math.min(answer, distanceArray[s][i] + distanceArray[i][a] + distanceArray[i][b])
    }
    return answer;
}