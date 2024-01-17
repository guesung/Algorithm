function solution(k, tangerine) {
    var answer = 0;
    
//     수확한 귤 중 k개를 고른다.
//     서로 다른 종류의 수를 최소화한다.
//     1. object를 이용하여 각 크기 별로 개수를 구한다.
//     1:1, 2:2, 3:2, 4:1, 5:2
//     value값 기준 내림차순 정렬한다.
//     앞에서부터 채운다.
    const tangerineObject = {};
    tangerine.forEach(it=>{
        tangerineObject[it] = tangerineObject[it]+1 || 1
    })
    const tangerineArray = Object.entries(tangerineObject)
    const sortedTangerineArray = [...tangerineArray].sort((a,b) => b[1] - a[1])
    let sum = 0;
    for(let i=0;i<sortedTangerineArray.length;i++){
        const [tangerineSize,tangerineCount] = sortedTangerineArray[i]
        sum += tangerineCount;
        if(sum >= k) return i+1
    }
}