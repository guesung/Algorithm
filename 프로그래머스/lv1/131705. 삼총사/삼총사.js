function solution(number) {
    var answer = 0;
//     1try : 3개씩 묶어서 노가다
//     number의 개수 최대 13개이기에 시간 초과는 안 걸릴 듯.
//     13c3이기에
    
    const dfs = (arr,now) => {
        if(arr.length===3){
            const sum = arr.reduce((prev,cur)=>prev+number[cur],0);
            if(sum===0) answer ++;
        }
        for(let i=now;i<number.length;i++){
            if(!arr.includes(i)) {
                arr.push(i)
                dfs(arr,i)
                arr.pop();
            }
        }
    }
    
    dfs([],0)
    
    
    return answer;
}