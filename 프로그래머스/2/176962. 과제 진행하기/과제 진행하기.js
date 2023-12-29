const formatTime = time => {
    const [hour,second] = time.split(':').map(v=>+v);
    return hour * 60 + second
}
const isEmpty = array => array.length === 0;

function solution(plans) {
    var answer = [];
//     가장 최근에 멈춘 과제 -> 스택
//     시 : 분 형태 -> 분 형태로 통일 (00:00 ~ 23:59 사이이기 때문에)
    
//     시간 순으로 오름차순 정렬
    const convertedPlanList = plans.map(plan => [plan[0],formatTime(plan[1]),+plan[2]]).sort((a,b) => a[1] - b[1])
//     1분 단위로 계산하기
    let nowTime = convertedPlanList[0][1] - 1;
    const stack = [];
    stack.push(convertedPlanList.shift())
    
    while(1){
        // 1분이 흐름
//         만약, stack이 비었고, convertedPlanList는 비지 않았다면 ? 시간을 계속 더해야 함.
        nowTime++;
        
        if(!isEmpty(convertedPlanList) && nowTime === convertedPlanList[0][1]) {
            stack.push(convertedPlanList.shift());
        }
        
        if(isEmpty(stack)) continue;
        stack[stack.length-1][2]--;
        if(stack[stack.length-1][2] === 0){
            answer.push(stack.pop());
        }
        if(isEmpty(convertedPlanList) && isEmpty(stack)) break;
    }
    
    
    return answer.map(it => it[0]);
}