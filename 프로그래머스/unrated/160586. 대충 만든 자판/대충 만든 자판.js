function solution(keymap, targets) {
    var answer = [];
    
//     1. targets를 순회
//     2. keymap에 있는지 판단 -> 아애 없다면 -1 return
//     3. findIndex를 통해 몇 번째에 있는지 구하기 -> 합산
    
    targets.forEach((target,index)=>{
        let sum = 0;
        for (let word of target){
            let minIndex = Infinity;
            for(let key of keymap){
                let num = [...key].findIndex(it=>it===word);
                if(num!==-1 && num<minIndex){
                    minIndex=num;
                }
            }
            sum+=minIndex+1;
        }
        if(sum===Infinity) answer[index]=-1
        else answer[index]=sum;
    })
    
    
    return answer;
}