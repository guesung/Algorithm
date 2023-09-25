function solution(a, b, n) {
    let totalGetCount = 0;
    
    let leftCount = n;
    while(leftCount>=a){
        let getCount = Math.floor(leftCount / a) * b;
        totalGetCount += getCount;
        
        leftCount = getCount + leftCount - getCount * a / b
//         getCount : 얻은 것의 개수
//         leftCount - getCount * a : 원래 있던 것의 개수
    }
    
    
    return totalGetCount;
}