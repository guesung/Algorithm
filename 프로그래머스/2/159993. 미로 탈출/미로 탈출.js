const DIRECTION_LIST = [
    [1,0],
    [-1,0],
    [0,1],
    [0,-1]
]
function solution(maps) {
    var answer = 0;
    let queue = [];
    maps = maps.map(it=>it.split(''))
    let startPoint, leverPoint;
    maps.forEach((map,y) => {
        map.forEach((it,x)=>{
            if(it === 'S') startPoint = [y,x];
            if(it === 'L') leverPoint = [y,x];
        })
    })
    const maxY = maps.length - 1, minY = 0;
    const maxX = maps[0].length - 1, minX = 0
    
//     1. 레버를 최단 거리로 찾는다. 
    let cnt = 0;
    let status = 'beforeLever'; // 'beforeLever' > 'afterLeber' > 'afterEnd'
    let newMaps = maps.map(it => [...it])
    queue = [startPoint]
    newMaps[startPoint[0]][startPoint[1]] = 'X'
    while(queue.length && status === 'beforeLever'){ 
        cnt ++;
        const newQueue = [];
        for (const [nowY,nowX] of queue){
            
            for (const [directionY,directionX] of DIRECTION_LIST){
                const afterMoveY = nowY + directionY;
                const afterMoveX = nowX + directionX;
                if(afterMoveY > maxY || afterMoveY < minY || afterMoveX > maxX || afterMoveX < minX) continue;
                
                if(newMaps[afterMoveY][afterMoveX] === 'X') continue;
                if(newMaps[afterMoveY][afterMoveX] === 'L') {
                    status = 'afterLever';
                    break;
                }
                newMaps[afterMoveY][afterMoveX] = 'X'
                newQueue.push([afterMoveY,afterMoveX]);
            }
        }
        queue = newQueue;
    }
    
//     2. Exit를 최단거리로 찾는다.
    newMaps = maps.map(it => [...it])
    queue = [leverPoint]
    newMaps[leverPoint[0]][leverPoint[1]] = 'X'
    while(queue.length && status === 'afterLever'){ 
        cnt ++;
        const newQueue = [];
        for (const [nowY,nowX] of queue){
            for (const [directionY,directionX] of DIRECTION_LIST){
                const afterMoveY = nowY + directionY;
                const afterMoveX = nowX + directionX;
                if(afterMoveY > maxY || afterMoveY < minY || afterMoveX > maxX || afterMoveX < minX) continue;
                
                if(newMaps[afterMoveY][afterMoveX] === 'X') continue;
                if(newMaps[afterMoveY][afterMoveX] === 'E') {
                    status = 'afterEnd';
                    break;
                }
                newMaps[afterMoveY][afterMoveX] = 'X'
                newQueue.push([afterMoveY,afterMoveX]);
            }
        }
        queue = newQueue;
    }
    return status === 'afterEnd' ? cnt : -1
}