function solution(N, road, K) {
    var answer = 0;

//     1부터 N까지의 번호
//     양방향 통행
//     N개의 마을 중 K시간 이하로 배달이 가능한 마을에서만 주문을 받는다.
//     구해야하는 것 : 1번 마을 기준으로 K시간 이하로 주문할 수 있는 곳
//     road ([a,b,c]) : ab는 두 마을의 변호, c는 걸리는 시간
    
//     고려 조건
//     1. a,b를 연결하는 도로가 여러개 있을 수 있다 -> 당연히 더 짧은 걸 선택하면 된다.
    
//     자료형은 무얼 써야할까? Map? 2차원 배열?
//     1번에서 2번으로 갈 수 있는 최소한의 경로 = Math.min(1번에서 3번으로 갈 수 있는 경로 + 3번에서 2번으로 갈 수 있는 경로, 1번에서 2번으로 갈 수 있는 경로) .. 점점 업데이트해나가면 된다.
    
//     최단 경로. 점점 업데이트를 해야 한다.
//     1번에서 3번으로 가려면, 1 -> 3 / 1 -> 2 -> 3 / 1 -> 4 -> 3 ... 의 최소값이다.
//     arr[1][3] = Math.min(arr[1][3], arr[1][2] + arr[2][3], arr[1][4] + arr[4][3])
//     예외 조건이 있을 수 있을까? 예를 들어, 3번을 먼저 탐색하고 나서 4번을 탐색할 때 4번으로 가는 최소값을 그 때 구했다던가.
//     새로운 점 [a,b,c]가 추가되었을 때 
    // arr[1][b] = Math.min(arr[1][b], arr[1][a] + arr[a][b])
//     1에서 b로가는 값을 업데이트해준다. 기존에 b로가는 값과, 1에서 a를 거쳐 b로 가는 값을 업데이트해주는 것이다.
    
//     arr[1][a] = Math.min(arr[1][a], arr[1][b] + arr[b][a])
//     위와 반대이다.
    
//     1. 2차원 배열을 만든다. (N+1) * (N+1)로 만들 것이다. 인덱스 값 = 현재 위치로 할 것이기 때문이다.
    const arr = Array.from(new Array(N+1),() => new Array(N+1).fill(Infinity))
    
//      자기 자신으로 가는 길의 거리는 0이다.
    for(let i=1;i<=N;i++){
        arr[i][i] = 0;
    }
//     2. road를 하나씩 순회한다.
    road.forEach(([a,b,c]) =>{
//         2.1. [a,b]를 업데이트한다.
//         2.2. 이 때, 한 쪽만 사용하기 위해 a<b로 한다.
        // 항상, a<b로 관리를 한다.
        arr[Math.min(a,b)][Math.max(a,b)] = Math.min(arr[Math.min(a,b)][Math.max(a,b)],c);
    })
    for(let i=1;i<=N;i++){ // 시작 점
        for(let j=i+1;j<=N;j++){ // 끝 점
            for(let k=1;k<=N;k++){  // 어디를 거쳐가느냐
                arr[i][j] = Math.min(arr[i][j], arr[Math.min(i,k)][Math.max(i,k)]+arr[Math.min(k,j)][Math.max(k,j)]);
//                 i->j로의 최소값 + 기존 i->j와, k를 거쳐간 점 중 최소값
            }
        }
    }
    for(let i=1;i<=N;i++){ // 시작 점
        for(let j=i+1;j<=N;j++){ // 끝 점
            for(let k=1;k<=N;k++){  // 어디를 거쳐가느냐
                arr[i][j] = Math.min(arr[i][j], arr[Math.min(i,k)][Math.max(i,k)]+arr[Math.min(k,j)][Math.max(k,j)]);
//                 i->j로의 최소값 + 기존 i->j와, k를 거쳐간 점 중 최소값
            }
        }
    }
    for(let i=1;i<=N;i++){ // 시작 점
        for(let j=i+1;j<=N;j++){ // 끝 점
            for(let k=1;k<=N;k++){  // 어디를 거쳐가느냐
                arr[i][j] = Math.min(arr[i][j], arr[Math.min(i,k)][Math.max(i,k)]+arr[Math.min(k,j)][Math.max(k,j)]);
//                 i->j로의 최소값 + 기존 i->j와, k를 거쳐간 점 중 최소값
            }
        }
    }
    return arr[1].filter(it => it<=K).length
//     예외 상황 : 나중에 더 최소값이 발견되었을 때
//     1에서 4로가는 최소값은, 1->2->4, 1->3->4, 1->4, 1->5->4의 최소값이다.
//     두 번순회해야 한다. 왜냐하면, 처음에는 다 안나올 수 있기 때문이다.
}