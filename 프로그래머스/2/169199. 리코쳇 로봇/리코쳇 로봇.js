function solution(board) {
    var answer = 0;
    
//     시작 위치에서 목표 위치까지 최소 몇 번만에 도달 할 수 있는가
//     상/하/좌/우 -> 한 방향으로 부딪힐 때까지 미끄러진다.
//     . : 빈공간 | R : 처음 위치 | D : 장애물의 위치 | G : 목표지점
//     R -> G
    
//     모든 경우의 수를 탐색해보아야 한다. 하지만, DFS로 정말 도느 경우의 술르 탐색하면 끝도 없을 것이다. 
//     거꾸로 생각해서 G에서 출발한다해도, 결국 R로 가아하기에 의미가 없는 뒤집기이다.
    
//     1. 상하좌우를 순회한다.
//     2. 이동할 수 있다면(장애물 없고, 끝이 아니고), 이동한다.
//     2차원 배열을 만들어서, 각 요소를 도달한 최소 값을 구한다.
//     만약, 현재 값이 더 큰 수라면, 해당 순회는 종료한다.
    const directionArray = [[1,0],[0,1],[-1,0],[0,-1]]
    
    const [yLength,xLength] = [board.length,board[0].length];
    const cntArr = Array.from(new Array(yLength),() => new Array(xLength).fill(Infinity))
    const startPointY = board.findIndex(it => it.includes('R'));
    const startPointX = board[startPointY].indexOf('R')
    
    const endPointY = board.findIndex(it => it.includes('G'));
    const endPointX = board[endPointY].indexOf('G')
    
    dfs(startPointY,startPointX,0);
    
    function dfs(y,x,cnt){
       if(cntArr[y][x] <= cnt){
           return;
       }
        cntArr[y][x] = cnt;
        for(const [directionY,directionX] of directionArray){
            let afterMoveY = y;
            let afterMoveX = x;
            while(1){
                afterMoveY += directionY;
                afterMoveX += directionX;
                if(afterMoveY < yLength && afterMoveY >= 0 && afterMoveX < xLength && afterMoveX >= 0 && board[afterMoveY][afterMoveX] !== 'D'){
                    continue;
                }
                afterMoveY -= directionY;
                afterMoveX -= directionX;
                break;
            }
            dfs(afterMoveY,afterMoveX,cnt+1);
        }
    }
    return cntArr[endPointY][endPointX] === Infinity ? -1 : cntArr[endPointY][endPointX];
}