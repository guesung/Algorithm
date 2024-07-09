function solution(n, wires) {
    if(n === 2) return 0;
    
    let result = Infinity;
    
    wires.forEach((_, index) => {
        const currentWires = [...wires.slice(0,index), ...wires.slice(index+1)];
        const connectedWireCount = getConnectedWireCount(currentWires, n);
        result = Math.min(result, Math.abs(connectedWireCount - (n - connectedWireCount)));
    });
    
    function getConnectedWireCount(wires, n) {
        const graph = Array.from({ length: n + 1 }, () => []);
        for (const [v1, v2] of wires) {
            graph[v1].push(v2);
            graph[v2].push(v1);
        }

        const visited = new Set();
        function dfs(node) {
            if (visited.has(node)) return 0;
            visited.add(node);
            let count = 1;
            for (const neighbor of graph[node]) {
                count += dfs(neighbor);
            }
            return count;
        }

        return dfs(1); // 1번 노드에서 시작
    }
    
    return result;
}