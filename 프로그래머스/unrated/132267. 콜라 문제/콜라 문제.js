function solution(a, b, n) {
    let totalGetCount = 0;
    
    let leftCount = n;
    while(leftCount>=a){
        let getCount = Math.floor(leftCount / a) * b;
        totalGetCount += getCount;
        
        leftCount = getCount + leftCount - getCount * a / b

    }
    
    
    return totalGetCount;
}