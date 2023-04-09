function solution(priorities, location) {
    var answer = 0;
//     1. priorities의 각 값을 숫자와 대응시킴
    priorities = priorities.map((prioritiy,i)=>[prioritiy,i])
    for(let i = 0; ;){
        if(priorities[i][0]===Math.max(...priorities.map(it=>it[0]))){
            answer+=1
            if(priorities[i][1]===location){
                return answer
            }
            priorities.shift();
        }else{
            priorities.push(priorities.shift())
        }
    }
    
    return answer;
}