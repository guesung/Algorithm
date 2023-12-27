function solution(land) {
//     bfs문으로 주변 석유를 탐색
//     n은 세로 길이(행의 개수), m은 가로 길이(열의 개수)
    const [n,m] = [land.length,land[0].length];
    const directionList = [[-1,0],[1,0],[0,-1],[0,1]];
    
    const bfs = (landArray,landObj) => {
        landObj.area += landArray.length;
        const newLandArray = [];
        
        for(const [y,x] of landArray) {        
            landObj.minX = Math.min(landObj.minX,x);
            landObj.maxX = Math.max(landObj.maxX,x);
            
            for(const direction of directionList){
                const [directionY,directionX] = direction;
                const [moveY,moveX] = [y+directionY,x+directionX];
                if(moveY<n && moveY>=0 && moveX<m && moveX>=0 && land[moveY][moveX]) {
                    newLandArray.push([moveY,moveX])
                    land[moveY][moveX] = 0;
                }
            }
        }
        if(newLandArray.length) bfs(newLandArray,landObj)
    }
    const dp = new Array(m+1).fill(0);
//     각 석유 덩어리의 시작점과 끝점, 그리고 석유 크기를 알면 된다.
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            const landObj = {area:0,minX:j,maxX:j}
            if(land[i][j]) {
                land[i][j] = 0
                bfs([[i,j]],landObj)
                
                dp[landObj.minX] += landObj.area;
                dp[landObj.maxX + 1] -= landObj.area;
            }
        }
    }
    let sum = 0;
    let result = 0;
    for(let i=0;i<m;i++){
        sum += dp[i]
        result = Math.max(sum,result);
    }
    return result;
}