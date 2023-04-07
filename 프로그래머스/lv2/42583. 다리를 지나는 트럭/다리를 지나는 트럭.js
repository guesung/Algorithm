function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
//     두 배열을 만들어, 최초의 배열이 빌 때까지 진행
//     bridge_arr의 총합 + truck_weights[0] <= weigth라면 bridge_arr로 truck_weights[0]을 이동
    
    const l = bridge_length
    const bridge_arr=Array(l).fill(0)
// bridge_arr ; 다리에 올라와 있는 트럭
    let cnt = 0;
    
    while(1){
        cnt++;
// bridge_arr의 원소를 한칸씩 뒤로 미루고, [0]의 요소를 0으로 만듬
        for(let i=l-1;i>0;i--){
            bridge_arr[i] = bridge_arr[i-1]
        }
        bridge_arr[0]=0
// bridge_arr의 합 + truck_weights[0]이 감당 가능한 무게라면(<=weight라면) bridge_arr에 합류
        if(bridge_arr.reduce((ac,cur)=>ac+cur,0)+truck_weights[0]<=weight){
            bridge_arr[0] = truck_weights.shift();
        }else{
            bridge_arr[0]=0;
        }
//         종료조건 ; truck_weights.length=0이고(모든 트럭이 지나 갔고) bridge_arr의 모든 값이 0(다리에 아무 트럭도 없다면)
        if(truck_weights.length===0 && bridge_arr.every(it=>it===0)) return cnt
    }
}