const addNode = (hash,nodeA,nodeB) => {
    if (hash.hasOwnProperty(nodeA)) hash[nodeA].push(nodeB);
    else hash[nodeA] = [nodeB];
    if (hash.hasOwnProperty(nodeB)) hash[nodeB].push(nodeA);
    else hash[nodeB] = [nodeA];
    return hash;
}
function solution(n, vertex) {
    var answer = 0;
//     1번 노드로부터 가장 멀리 떨어진 노드
//     1. 1번 노드로부터의 거리(간선 개수) 구하기
    
//     1.1. 1 -> 2,3 / 2 -> 1,3,5 / 3 -> 1,2,6 .. 각 요소들을 해시테이블에 담기. 이 때, [3,6]이라면 3->6, 6->3 모두 넣어야 함. key값은 각 노드, value값은 각 노드와 연결된 노드(배열)
    
    let hash = {};
    for(const item of vertex){
        hash = addNode(hash,item[0],item[1]);
    }
    
    
    const bfs = (startNode) => {
        
    }
    
//     1.2. 2번 ~ n번까지 순회
    const distanceHash = {'0' : [1]};
    const visitedNode = [1];
    let distance = 0;
    while(true){
        const distanceArray = distanceHash[distance];
        distance ++;
        distanceHash[distance] = [];
        for(const startNode of distanceArray){
            for(const endNode of hash[startNode]){
                if(visitedNode.includes(endNode)) continue;
                distanceHash[distance].push(endNode);
                visitedNode.push(endNode)   
            }
        }
        if(visitedNode.length === n) break;
    }
    
//     2. 간선 개수가 가장 많은 개수 구하기
    const maxDistance = Math.max(...Object.keys(distanceHash).map(it=>+it));
    
//     3. 해당 개수를 가진 노드의 개수
    
    
    return distanceHash[maxDistance].length;
}