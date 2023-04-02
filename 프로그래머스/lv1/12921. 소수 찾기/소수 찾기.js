function solution(n) {
    let cnt = 0;
    const isSosu = (num) => {
        for(let i=2;i*i<=num;i++){
            if(num%i==0) return false;
        }
        return true;
        
    }
    
    for(let i=2;i<=n;i++){
        if (isSosu(i)) cnt++;
    }
    
    return cnt;
}