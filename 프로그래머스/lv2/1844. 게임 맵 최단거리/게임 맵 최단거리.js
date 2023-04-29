function solution(maps) {
    let answer = Infinity;
    const [ySize,xSize] = [maps.length,maps[0].length]
    
    const direction = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0],
    ];
    const queue = [];
    queue.push([0,0,0]);
    maps[0][0] = 0;
    let now = 0;
    
    while(queue.length>now){
        let [y,x,cnt] = queue[now];
        now++;
        if(y===ySize-1 && x===xSize-1) {
            answer=Math.min(cnt,answer)
            break;
        }
        for(let i=0;i<4;i++){
            let [goY,goX]=[y+direction[i][0],x+direction[i][1]]
            if(goY<0 || goY>=ySize || goX<0 || goX>=xSize || !maps[goY][goX]) continue;
            maps[goY][goX]=0
            queue.push([goY,goX,cnt+1])
        }
    }
    // console.log(maps)
    return maps[ySize-1][xSize-1]===1?-1:answer+1
    // return answer===Infinity?-1:answer+1;
}