function solution(board) {
    const visited = Array.from(Array(board.length),()=>Array(board[0].length).fill(false))
    var answer = 0;
    const queue = [];
    let start,end;
    const gX=[0,0,1,-1];
    const gY=[1,-1,0,0];
    
    
    board.forEach((line,index)=>{
        if(line.indexOf('R')!==-1){
            start = [index,line.indexOf('R')]
        }
        if(line.indexOf('G')!==-1){
            end = [index,line.indexOf('G')]
        }
    })  
    
    queue.push([start[0],start[1],0]);
    while(queue.length>0){
        
        let now = queue.shift();
        if(visited[now[0]][now[1]]) continue;
        visited[now[0]][now[1]]=true;
        if(now[0]===end[0] && now[1]===end[1]) {
            return now[2]
        }
        
        for(let i=0;i<4;i++){
            let [y,x,cnt]=now;
            while(true){
                x+=gX[i]
                y+=gY[i]
                if(y<0 || x<0 || y>=board.length || x>=board[0].length || board[y][x]==='D') break;
            }
            x-=gX[i]
            y-=gY[i]
            if(y===now[0] && x===now[1]) continue;
            else {
                queue.push([y,x,cnt+1])
            }
        }
    }
    
    return -1;
}