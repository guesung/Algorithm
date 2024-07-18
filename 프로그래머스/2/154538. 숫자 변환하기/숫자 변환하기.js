function solution(x, y, n) {
//     x를 y로 변환한다.
    
//     x에 n을 더한다.
//     x에 2를 곱한다.
//     x에 3을 곱한다.
    
//     x를 y로 변환하기 위한 최소 연산 횟수
    
//     즉, x에서 n을 더하거나, 2를 곱하거나, 3을 곱해서 y를 만들 수 있는 최소한의 홋수를 구하라
//     모든 경우를 탐색하는 건 무조건 시간 초과이다. y는 최대 100만 이기 때문이다.
//     y부터 시작한다면 ? -> 3으로 나누기 -> 무조건 3으로 나누는 게 좋을까? 2로 두 번 나누면 끝나는 걸, 3으로 나눔으로 써 망칠 수 있지 않을까?
//     e.g. y=60, x=15, n=1
//     2로 두 번 나누면 끝나지만, 3으로 나누면 5번을 n(1)만큼 빼야 한다.
//     2를 곱해야 하는 지, 3을 곱해야 하는 지, n을 더해야 하는 지 어떻게 알 수 있을까?
    
//     BFS로 풀어야 하는게 맞나?
    let stack = [y]; // [현재 숫자,cnt]
    
    // *2 + n했을 때, y보다 크다면 행동을 안취하면 되나?
    
    let cnt = 0;
    let answer;
    while(1){
        const newStack = [];
        if(stack.includes(x)) return cnt;
        if(stack.length === 0) return -1;
        cnt++;
        if(answer) break;
        
        for(const it of stack){
            if(it === x) {
                answer = cnt;
                console.log(answer)
                break;
            }
            
            if(it < x) continue;

            if(it % 3 === 0) newStack.push(it/3);
            if(it % 2 === 0) newStack.push(it/2);
            newStack.push(it - n);
        }
        
        stack = [...newStack];
    }
    return answer;
    
//     let answer = Infinity;
//     dfs(x,0);
    
//     function dfs(it,cnt){
//         if(it === y){
//             answer = Math.min(cnt,answer);
//         }
//         if(it > y) return;
        
//         dfs(it+n,cnt+1); // 1씩 100만 번 더하게 될 수도 있다.
//         dfs(it*2,cnt+1);
//         dfs(it*3,cnt+1);
//     }
//     return answer === Infinity ? -1 : answer;
}