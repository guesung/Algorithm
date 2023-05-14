function solution(places) {
    const result = []
    const manhatenA = [[2,0],[-2,0],[0,2],[0,-2]]
    const manhatenB = [[1,1],[1,-1],[-1,1],[-1,-1]]
    const manhatenC = [[1,0],[-1,0],[0,1],[0,-1]]
    
    const isGood = (arr,y,x) => {
        for(let i=0;i<4;i++){ // P가 위치에 있다면 무조건 false
            let item = manhatenC[i];
            const [goY,goX] = [y+item[0],x+item[1]];
            if(goY>=5 || goX>=5 || goY<0 || goX<0) continue;
            
            if(arr[goY][goX]==='P') return false;
        }
        for(let i=0;i<4;i++){ // 사이에 O가 있다면 무조건 false. P라면 manhatenC에서 이미 걸러짐
            let item = manhatenA[i];
            const [goY,goX] = [y+item[0],x+item[1]];
            if(goY>=5 || goX>=5 || goY<0 || goX<0) continue;
            
            const [middleY,middleX] = [y+item[0]/2,x+item[1]/2]
            
            if(arr[goY][goX]==='P' && arr[middleY][middleX]==='O') return false;
        }
        for(let i=0;i<4;i++){ // 칸막이가 둘 사이에 2개 있어야 함
            let item = manhatenB[i];
            const [goY,goX] = [y+item[0],x+item[1]];
            if(goY>=5 || goX>=5 || goY<0 || goX<0) continue;
            
            if(arr[goY][goX]==='P'){
                let [middleY,middleX] = [y,x+item[1]]
                if(arr[middleY][middleX]==='O') return false;

                [middleY,middleX] = [y+item[0],x]
                if(arr[middleY][middleX]==='O') return false;
            }
        }
        return true;   
        
    }
    
    places.forEach((place)=>{
        let isGoodBoolean = true;
        place.forEach((column,y)=>{
            column.split('').forEach((person,x)=>{
                if(person==='P') {
                    if(!isGood(place,y,x)) isGoodBoolean=false;
                }
            })
        })
        result.push(isGoodBoolean?1:0)
    })    
    return result;
}