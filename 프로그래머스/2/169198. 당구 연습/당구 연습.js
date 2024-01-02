function solution(m, n, startX, startY, balls) {
//     쿠션/원쿠션(벽에 한 번 맞힌 후 공을 맞힘)
//     두 점의 거리 = 벽을 기준으로 대칭시켰을 때 점과의 거리
//     1. balls의 각 점을 벽을 기준으로 대칭시킨다. -> 4개의 점 씩 생긴다.
//     2. 메인 공은 startX,startY를 시작으로 balls의 각 점들을 가진다.
//     3. 대칭시킨 balls와 메인 공의 거리를 구한다.
//     4. 거리 중 가장 짧은 값을 result배열에 추가한다.
    const symmetriedBalls = balls.map(ball=>{
//         대칭된 4개의 배열 반환
        const [x,y] = ball;
//         x값이 같을 경우, 예외 상황이 발생한다.
        if(x===startX){
//             tartget공의 y가 더 작을 경우, x축 대칭한 점(y*-1)은 포함하면 안된다.
            if(y<startY){
                return [
                    [-1*x,y],
                    [x,2*n-y],
                    [2*m-x,y],
                ]    
            }else{
//             tartget공의 y가 더 클 경우, n축 대칭한 점은 포함하면 안된다.
                return [
                    [-1*x,y],
                    [x,-1*y],
                    [2*m-x,y],
                ]                
            }
        }
        if(y===startY){
            if(x<startX){
                return [
                    [x,-1*y],
                    [x,2*n-y],
                    [2*m-x,y],
                ]    
            }else{
                return [
                    [-1*x,y],
                    [x,-1*y],
                    [x,2*n-y],
                ]                
            }
        }
        return [
            [-1*x,y],
            [x,-1*y],
            [x,2*n-y],
            [2*m-x,y],
        ]
    })
    const result = [];
    
    const getSquareDistance = (ballA,ballB) => {
        return Math.abs((ballB[1] - ballA[1]) ** 2 + (ballB[0] - ballA[0])**2);
    }
    const mainBall = [startX,startY];
    symmetriedBalls.forEach((symmetriedBall,index)=>{
        let shortestDistance = Infinity;
        symmetriedBall.forEach(ball => {
            const distance = getSquareDistance(mainBall,ball)
//             단, x값이 같을 경우, 메인 볼에서 타겟 볼을 먼저 치면 안된다.
            shortestDistance = Math.min(distance,shortestDistance)
        })
        result.push(shortestDistance)
    })
    return result;
}