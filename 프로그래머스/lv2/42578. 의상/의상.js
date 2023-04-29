function solution(clothes) {
    var answer = 0;
    
    const hashMap={};
    clothes.forEach(cloth=>{
        hashMap[cloth[1]] = hashMap[cloth[1]]+1 || 1
    })
    let sum = 1;
    Object.values(hashMap).forEach(it=>{
        sum*=(it+1)
    })
    
    return sum-1;
}