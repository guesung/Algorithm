function solution(n, s, a, b, fares) {
//     1. 주어진 fares를 사용하기 쉬운 형태로 변환하기 -> 객체 ?
//     2. {4 : [[1,10],[2,66],[6,50]], 2 : [[4,66],[3,22]] ,.. }
    // s에서 출발해 a,b각 지점에 가야 한다. 각 지점에 가는 최소값은? 이 때, 동일한 지점까지 같이가면 비용이 절반이다.
//     [a,b] : a-> b로가는 최소 거리
//     1. n+1 * n+1크기의 2차원 배열 만들기
//     2. [a][b]은 a에서 b로 가는 최소 거리
//     3. 순회를 해야 한다. 뭘 기준으로 순회하지? fares를?
    const array = new Array(n+1).fill().map(_ => new Array(n+1).fill(Infinity));
    
    fares.forEach(fare => {
        const [start,end,distance] = fare;
        array[start][end] = distance;
        array[end][start] = distance;
    })
    for(let i=1;i<=n;i++){
        array[i][i] = 0;
    }
    for(let k=1;k<=n;k++){
        for(let i=1;i<=n;i++){
            for(let j=1;j<=n;j++){
//                 i -> j로 가는데, k를 거쳐가는 경우의 최소값 : [i][j]와 [i][k] + [k][j]의 최소값
                array[i][j] = Math.min(array[i][k] + array[k][j], array[i][j])
            }
        }
    }
    let minSum = array[s][a] + array[s][b];
    console.log(array)
//     같이 탔을 때 더 거리가 줄어들 수 있음. 한 점씩 순회하며, 각 점으로 가는 최소값 구하기
    for(let transferNode=1;transferNode<=n;transferNode++){
        const transferDistance = array[s][transferNode] + array[transferNode][a] + array[transferNode][b];
        minSum = Math.min(transferDistance,minSum);
    }
    return minSum;
}