const DIRECTION_LIST = [
    {y:1,x:0},
    {y:-1,x:0},
    {y:0,x:-1},
    {y:0,x:1},
]
function solution(maps) {
    var answer = [];
//     X 혹은 1-9 숫자
//     X : 바다, 숫자는 무인도
//     상+하+좌+우로 연결된 땅 = 최대 머무룰 수 있는 날짜
//     문제의 핵심 : 연결된 땅의 합을 구하기 > 오름차순 정렬하여 return
//     BFS/DFS -> 점점 넓혀가는 BFS 방식 써도 될 듯
//     이미 체크한 땅 : X로 변경
    maps = maps.map(mapColumn => mapColumn.split(''));
    const queue = [];
    const minX = 0, minY = 0;
    const maxX = maps[0].length-1, maxY = maps.length-1; // 여기서 시간 많이슴
    
    let sum = 0;
    function dfs ({y,x}) {
        for (const {y:directionY,x:directionX} of DIRECTION_LIST){
            const afterMoveY = y + directionY;
            const afterMoveX = x + directionX;
            if(afterMoveX<minX || afterMoveY<minY || afterMoveX>maxX || afterMoveY>maxY) continue;
            if(maps[afterMoveY][afterMoveX]!=='X') {
                sum += +maps[afterMoveY][afterMoveX]
                maps[afterMoveY][afterMoveX] = 'X'
                dfs({y:afterMoveY,x:afterMoveX});
            }
        }
    }
    const array = [];
    maps.forEach((mapColumn,y) => {
        mapColumn.forEach((it,x)=>{
            if(maps[y][x] !== 'X') {
                sum = +maps[y][x];
                maps[y][x]='X'
                dfs({y,x},sum)
                array.push(sum)
            }
        })
    })
    
    
    
    array.sort((a,b)=>a-b)
    return array.length===0?[-1]:array;
}