const animalNumber = {
    'sheep':0,
    'wolf':1,
}

const countAnimal = (infoArray,visitedEdgeArray,animal) => visitedEdgeArray.filter(visitedEdge => infoArray[visitedEdge]===animalNumber[animal]).length

const getCanVisitEdge = (edgeArray,visitedEdgeArray) => {
    return visitedEdgeArray.reduce((prev,cur)=>[...prev,...new Set(edgeArray.filter(edge => edge[0]===cur).map(edge=>edge[1]))].filter(edge => !visitedEdgeArray.includes(edge))
    ,[])
}
const getEdgeAnimal = (infoArray,edge) => infoArray[edge]

function solution(info, edges) {
    var answer = 0;
    let maxSheepCount = 0;
    
    const search = (visitedEdge,sheepCount,wolfCount) => {
        if(sheepCount <= wolfCount) return;
        
        maxSheepCount = Math.max(maxSheepCount,sheepCount);
        const canVisitEdge = getCanVisitEdge(edges,visitedEdge);
        
        for(const nextEdge of canVisitEdge){
            if(getEdgeAnimal(info,nextEdge)===0) search([...visitedEdge,nextEdge],sheepCount+1,wolfCount)
            else {
                search([...visitedEdge,nextEdge],sheepCount,wolfCount+1)
            }
            
        }
    }
    
    search([0],1,0)
    return maxSheepCount
}