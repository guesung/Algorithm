function solution(n) {
//     가장 위는 1이다.
//     총 개수 : 1+2+..+n = (n)(n+1)/2
//     index = 0부터 시작해서 
    // +0, +1, +2, +3, +4
//     +1, +1, +1, +1
//     -5, -4, -3, -2
    
//     +2, +3
//     +1
    
//     5개>4개>3개>2개>1개 사이드 기준 1씩 줄어든다.
    
//     1번) +0부터 시작 -> +2부터 시작 -> ..
//     2번) 항상 +1
//     3번) -n부터 시작 -> -(n-1)부터 시작 -> ..
    
    // const maxNum = (n)(n+1)/2
    // const result = new Array(maxNum).fill(0)
    const result = [];
    let currentIndex = 0;
    let currentValue = 1;
    for(let i=n;i>0;i--){ // 6,5,4,3 ..
        const loop = (n-i)%3; // 0,1,2
        const loopCnt = Math.floor((n-i)/3);
        for(let j=0;j<i;j++){
            if(loop === 0){
                let addNum = loopCnt * 2 + j;
                currentIndex += addNum;
            }
            if(loop === 1) currentIndex += 1;
            if(loop === 2) currentIndex -= (n-loopCnt-j);
            result[currentIndex] = currentValue;
            currentValue++;
        }
    }
    return result;
    
    
    
    
    
    
}