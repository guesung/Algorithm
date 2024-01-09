function solution(x, y, n) {
    var answer = 0;
    
//     DP
//     x+1부터 y까지의 값에, 변환 횟수를 업데이트 해나가는 방식
//     큰 수부터 순회해야 더 효율적으로 순회할 수 있다.
    const dp = new Array(y+1).fill(Infinity); // dp는 각 값이 되기 위한 실행 횟수
    dp[x] = 0;
    for(let i=x+1;i<=y;i++){
        if(i-n >= x) dp[i] = Math.min(dp[i],dp[i-n]+1);
        if(i%2===0 && i/2 >= x) dp[i] = Math.min(dp[i],dp[i/2]+1);
        if(i%3===0 && i/3 >= x) dp[i] = Math.min(dp[i],dp[i/3]+1);
    }
    
    return dp[y] === Infinity ? -1 : dp[y];
}