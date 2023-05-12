function solution(relation) {
    var answer = 0;
//     1. 유일성 : 동일한 값이 없어야 함
//     2. 최소성 : 최소한의 개수로 구성해야 한다.
    
//     모든 경우의 수를 탐색하는 DFS로 할 경우 O((n**m)**2) 
    
//     구성 : 최소 1개 ~ 20개. 
    
    const rowCount = relation[0].length
    const columnCount = relation.length
//     DFS vs BFS. 조건에 충족하지 않는다면 중간에 멈춰야 하기에 DFS가 나을 듯
    
    const isOnly = (arr) =>{
//         1. 유일성
        const tempArr = [];
        let isOnly = true;
        relation.forEach(item=>{
            const str = arr.map(index=>item[index]).join('')
            if(tempArr.includes(str)) isOnly=false;
            else tempArr.push(str)
        })
        return isOnly;
    }
    const accArr = [];
    // ex. [[1,2],[2,3,4]]
//     ex. [1,2,3,4]
    const isLeast = (arr) =>{
        let isLeast = true;
        accArr.forEach(item=>{
            if(item.every(it=>arr.includes(it))) isLeast=false;
        })
        return isLeast
    }
    
    
    const stack = [];
    const dfs = (maxCount,stack,now) => {
        if(stack.length===maxCount){
//             1. 유일성
            if(!isOnly(stack)) return;
//             2. 최소성
            if(!isLeast(stack)) return;
            accArr.push(stack)
            return;
        }
        for(let i=now;i<rowCount;i++){
            dfs(maxCount,[...stack,i],i+1)
        }
        
    }
    
    for(let i=1;i<=rowCount;i++){
        dfs(i,[],0)    
    }
    return accArr.length;
}