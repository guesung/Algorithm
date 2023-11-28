function solution(n, s, a, b, fares) {
  const graph = new Array(n).fill().map((_) => new Array(n).fill(Infinity));
  for(let i=0;i<n;i++) graph[i][i] = 0
      
  for (const fare of fares) {
    const [start, end, distance] = fare;
    graph[start - 1][end - 1] = distance;
    graph[end - 1][start - 1] = distance;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][k] + graph[k][j] < graph[i][j])
          graph[i][j] = graph[i][k] + graph[k][j]; 
      }
    }
  }

  let answer = graph[s - 1][a - 1] + graph[s - 1][b - 1];
  for (let i = 0; i < n; i++) {
      
    answer = Math.min(
      graph[s - 1][i] + graph[i][a - 1] + graph[i][b - 1],
      answer
    );
  }
  return answer;
}
