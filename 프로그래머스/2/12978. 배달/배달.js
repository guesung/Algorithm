function solution(N, road, K) {
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
        arr[Math.min(a,b)][Math.max(a,b)] = Math.min(arr[Math.min(a,b)][Math.max(a,b)],c);
    })
    
    while(true){
        let isChanged = false;
        for(let i=1;i<=N;i++){ // 시작 점
            for(let j=i+1;j<=N;j++){ // 끝 점
                for(let k=1;k<=N;k++){  // 어디를 거쳐가느냐
                    const beforeValue = arr[i][j];
                    arr[i][j] = Math.min(arr[i][j], arr[Math.min(i,k)][Math.max(i,k)]+arr[Math.min(k,j)][Math.max(k,j)]);
                    const afterValue = arr[i][j]
                    if(beforeValue !== afterValue) isChanged = true;
    //                 i->j로의 최소값 + 기존 i->j와, k를 거쳐간 점 중 최소값
                }
            }
        }
        if(!isChanged) break;
    }
    return arr[1].filter(it => it<=K).length
//     예외 상황 : 나중에 더 최소값이 발견되었을 때
//     1에서 4로가는 최소값은, 1->2->4, 1->3->4, 1->4, 1->5->4의 최소값이다.
//     두 번순회해야 한다. 왜냐하면, 처음에는 다 안나올 수 있기 때문이다.
}