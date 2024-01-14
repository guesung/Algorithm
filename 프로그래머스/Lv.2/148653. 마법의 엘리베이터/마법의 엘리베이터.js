function solution(storey) {
//     위로 갔다가 내려갈 수도 있고, 그냥 내려갈 수도 있다. 
//     storey에서 시작해서 0으로 가야한다.
    let answer = Infinity;
    const dfs = (number,cnt) => {
        console.log(number,cnt)
        if(number < 10){
            switch(number){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    cnt += number;
                    break;
                case 6:
                case 7:
                case 8:
                case 9:
                    cnt += (11-number);
                    break;
            }
            answer = Math.min(answer,cnt);
            return;
        }
        const afterNumber = Math.floor(number/10);
        dfs(afterNumber,cnt + number%10)
        dfs(afterNumber + 1,10-number%10+cnt);
    }
    dfs(storey,0)
    
    return answer;
}