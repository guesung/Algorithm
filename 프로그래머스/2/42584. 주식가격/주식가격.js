function solution(prices) {
//     가격이 떨어지지 않은 기간은 몇 초인가?
//     1. map을 활용하여 주어진 배열과 동일한 크기의 배열로 리턴한다.
//     2. 각 원소 -> 뒤에 오는 원소 배열을 순회 -> 더 작은 수 나오면 종료
    
//     효율성 테스트 실패
    
    // return prices.map((priceA,indexA)=>{
    //     const it = prices.slice(indexA + 1).findIndex((priceB,indexB)=>{
    //         if(priceB < priceA) return true
    //     }) 
    //     return it === -1 ? prices.length - indexA - 1 : it + 1
    // })
    
    const result = new Array(prices.length).fill(0).map((_,i) => prices.length - (i + 1))
    const stack = [];
    prices.forEach((price,index) => {
        if(stack.length === 0) stack.push([index,price]);
        
        while(1){
            if(stack.at(-1)[1] > price){ // 교체
                const [popIndex,popValue] = stack.pop();
                result[popIndex] = index - popIndex;
            }else{ // stack에 넣는다.
                stack.push([index,price]);
                break;
            }
            if(stack.length === 0){
                stack.push([index,price]);
                break;
            }
        }
    })
//     []
    return result;
}