function solution(maps) {
    var answer = [];
    
//     연결되어 있는 것의 합
//     연결되어 있다 : 좌,우,상,하
//     순회를 하다가 X가 아니다 -> 함수 돌림 -> 돌리며 거쳐간 것은 X로 표시
    
    maps=maps.map(map=>map.split(''))
    let sum = 0;
    const findArea = (y,x) => {
        if(maps[y][x]==='X') return;
        else {
            sum+= +maps[y][x]
            maps[y][x]='X';
        }
        if(y-1>=0 && maps[y-1][x]!=='X'){
            findArea(y-1,x);
        }
        if(x-1>=0 && maps[y][x-1]!=='X'){
            findArea(y,x-1);
        }
        if(y+1<maps.length && maps[y+1][x]!=='X'){
            findArea(y+1,x);
        }
        if(x+1<maps[0].length && maps[y][x+1]!=='X'){
            findArea(y,x+1);
        }
    }
    
    maps.forEach((map,y)=>{
        map.forEach((it,x)=>{
            if(it!=='X'){
                findArea(y,x);
                answer.push(sum);
                sum = 0;
            }    
        })
    })
    
    if(answer.length===0) return [-1]
    else return answer.sort((a,b)=>a-b);
}