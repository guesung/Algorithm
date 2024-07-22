function solution(info, edges) {
    var answer = 0;
    
//     루트 노드에서 출발하여 각 노드를 돌아다니며 양을 모은다.
//     각 노드에 방문하면, 해당 양 혹은 늑대가 당신을 따라온다.
//     양 <= 늑대가 되면, 모든 양을 잡아먹힌다.
//     양이 늑대에게 잡아먹히지 않도록 하면서 최대한 많은 양을 모아 루트로 돌아온다.
    
//     info : 각 노드에 있는 양 또는 늑대에 대한 정보를 담은 배열 : 0은 양 1은 늑대
//     2진 트리의 각 노드들의 연결 관계를 담은 2차원 배열
    
//     현재, 어느 점으로 이동할 수 있는 지 알아야 한다.
//     처음에는 0이다.
//     그 다음은, 0과 연결된 점들이다.
    
//     모든 경우의 수를 탐색해야 한다. 각 경우에서, 현재 이동 가능한 모든 점들로 이동해야 한다.
    
    
    const map = new Map();
    for(const [edgeA,edgeB] of edges){
        map.set(edgeA,map.get(edgeA) ? [...map.get(edgeA), edgeB] : [edgeB]);
        map.set(edgeB,map.get(edgeB) ? [...map.get(edgeB), edgeA] : [edgeA]);
    }
    
    // const enableNodes = new Set([0])
    
    let maxSheepCnt = 0;
    dfs([0],1,0);
    function dfs(visitedNodes,sheepCnt,wolfCnt){
        if(sheepCnt <= wolfCnt) return;
        maxSheepCnt = Math.max(maxSheepCnt,sheepCnt)
        const enabledVisitNodes = [];
        for(const node of visitedNodes){
            enabledVisitNodes.push(...map.get(node).filter(it=>!visitedNodes.includes(it)))
        }
        for(const node of enabledVisitNodes){
            if(info[node] === 1) dfs([...visitedNodes,node],sheepCnt,wolfCnt+1);
            else dfs([...visitedNodes,node],sheepCnt+1,wolfCnt)
            
        }
        return;
    }
    return maxSheepCnt;
}