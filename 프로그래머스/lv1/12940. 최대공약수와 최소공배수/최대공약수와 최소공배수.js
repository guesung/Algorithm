function solution(n, m) {
//     [최대공약수, 최소공배수]
    // n과 m의 최대공약소
//     예를들어 12, 16 -> 4 -> 일단 n과 m중 더 작은 수를 시작으로 1씩 내려가며 나눠보기 -> 둘다 나누어 떨어지면 stop
    [n,m] = [Math.min(n,m),Math.max(n,m)]
    
    for(let i=n;i>0;i--){
        if(n%i===0 && m%i===0){
            return [i,n*m/i]
        }
    }
}