const direction = {
    'E' : [0,1],
    'W' : [0,-1],
    'S' : [1,0],
    'N' : [-1,0]
}

function solution(park, routes) {
    var answer = [];
//     0. S의 위치를 찾기
//     1. routes를 순회하며 이동 
//     2. 벽이 있다면 이동하지 못함
//     항상 0,0에서 시작하는 것은 아님
    const now = [0,0]
    park.forEach((item,y)=>{
        item.split('').forEach((it,x)=>{
            if(it==='S') {
                now[0]=y;
                now[1]=x;
            }
        })
    })
    const maxLength = [park.length,park[0].length]
    const after = [0,0]
    routes.forEach(route=>{
        const [direct,size] = route.split(' ')
        after[0] = now[0] + direction[direct][0] * size
        after[1] = now[1] + direction[direct][1] * size
        if(after[0]<maxLength[0] && after[1]<maxLength[1] && after[0]>=0 && after[1]>=0){
             // && park[after[0]][after[1]] !=='X'
            let isTrue = true;
            for(let i=0;i<size;i++){
                if(park[now[0]+direction[direct][0]*(i+1)][now[1]+direction[direct][1]*(i+1)] === 'X') isTrue = false; 
            }
            if(isTrue){
                now[0]=after[0]    
                now[1]=after[1]
            }
        }
        
        
    })
    
    
    
    
    return now;
}