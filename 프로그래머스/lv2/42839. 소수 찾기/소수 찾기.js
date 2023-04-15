function solution(numbers) {
    let answer = 0;
    
    number = numbers.split('').map(v=>+v)
    
    const arr = [];
    const arrResult = [];
    const visited = new Array(number.length).fill(false);
    
//  소수 판별 함수
    const isSosu = (num) => {
//      예외 처리 : 0,1은 소수가 아님
        if(num === 0 || num === 1 ) return false
        for (let i=2;i<=num**(1/2);i++){
            if(num%i===0){
                return false;
            }
        }
        return true;
    }
//  DFS문
    const dfs = (num) => {
        if(arr.length === num){
            if(isSosu(Number(arr.join('')))) arrResult.push(Number(arr.join('')))
            return;
        }
        for (let i=0;i<number.length;i++){
            if (visited[i]) continue;
            arr.push(number[i]);
            visited[i] = true;
            dfs(num);
            visited[i] = false;
            arr.pop();
        }
    }
//  메인
    for (let i=1;i<=number.length;i++){
        dfs(i)
    }

    return [...new Set(arrResult)].length;
}