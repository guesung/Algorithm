const sum = (array) => {
    return array.reduce((cur,prev) => cur+prev,0);
}
function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
//     1. 현재 다리에 존재하는 트럭을 담은 stack을 만든다.
//     2. stack에는 [트럭 무게, 현재 위치]를 담는다.
//     2.1. 현재 위치는 처음에는 1이다.
//     3. 다음 차례 -> 현재 있는 트럭들의 [1](현재 위치)를 1씩 더한다.
//     3.1. 이 때, bridge_length를 초과하면 그 요소를 제외한다. (pop)
//     4. 현재 stack의 합을 구한다.
//     5. stack의 합 + 다음 트럭 <= truck_weight라면 추가한다.
    
    const stack = [];
    let i = 0;
    while(true){
        answer++;
        [...stack].reverse().forEach((it)=>{
            it[1]++;
            if(it[1]>bridge_length) stack.shift();
        })
        if(sum(stack.map(it=>it[0]))+truck_weights[i]<=weight) {
            stack.push([truck_weights[i],1])
            i++
        }
        if(stack.length===0) break;
        
    }
    
    return answer;
}