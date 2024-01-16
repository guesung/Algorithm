function solution(k, d) {
//     1. 축의 개수
//     2. 축이 아닌 개수
//     k ~ d-1까지 x값을 k씩 더하며 순회 ->
    let sum = 0;
    for(let x=k;x<d;x+=k){
        sum += Math.floor(Math.sqrt(d**2 - x**2)/k)
        // for(let y=k;y<d;y+=k){
        //     if(x**2 + y**2 <= d**2){
        //         sum++;
        //     }else break;
        // }
    }
    let axisPointCnt = Math.floor(d/k)
    return sum + axisPointCnt * 2 + 1;
}