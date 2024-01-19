function solution(k, ranges) {
    var answer = [];
//     짝수 -> 2로 나눈다.
//     홀수 -> 3을 곱하고 1을 더한다.
    
//     [0,0] : 전체구간
//     [1,-2] : 1 ~ 3 (n-2 = 3)
//     1. 우박수열이 1이 될 때까지의 횟수 n 구하기
    let n = 0;
    const yArray = [k];
    while(1){
        k = k % 2 ? k * 3 + 1 : k / 2
        yArray.push(k);
        n++;
        if(k <= 1) break;
    }
    
//     2. ranges를 순회하기
//     2.1. 각 요소 별 구간 구하기 : 면적 합을 구하면 된다.
//     2.1.1. [0,1],[1,2].. 각 면적을 미리 구해두기
//     2.1.2. [a,b] 면적 = 1 * (a일 때 y값 + b일때 y값) / 2
    
    const areaArray = [];
    for(let i=0;i<yArray.length-1;i++){
        const curY = yArray[i], nextY = yArray[i+1];
        areaArray.push((curY + nextY)/2)
    }
    
    const result = [];
    for(const range of ranges){
        const startX = range[0], endX = n + range[1];
        if(startX>endX) result.push(-1)
        else result.push(areaArray.slice(startX,endX).reduce((prev,cur)=>prev+cur,0))
    }
    
//     2.2. [1,-2] = [1,n-2] => [1,3] => 2.1.1에서 구한 1,2를 더하면 된다.
    
    
    
    
    return result;
}