function solution(progresses, speeds) {
    var answer = [];
//     1. 각각 100에서 뺸다
//     2. progress / speed 하여 올림을 취한다
//     3. 앞에서부터 가장 큰 값을 구한다. => 변화가 생기면 1로 다시 초기화 & 배열에 담기
    
    progresses = progresses.map((progress,i)=>Math.ceil((100-progress)/speeds[i]));
    let maxValue=0;
    progresses=progresses.map(progress=>{
        if(maxValue<progress){
            maxValue=Math.max(maxValue,progress)
        }
        return maxValue
    })
    let value = progresses[0], sum = 1;
    console.log(progresses)
    for(let i=1;i<progresses.length;i++){
        if(progresses[i]===value) {
            sum+=1
            continue;
        }else{
            value=progresses[i]
            answer.push(sum)
            sum=1;
        }
        
    }
    answer.push(sum)
    return answer;
}