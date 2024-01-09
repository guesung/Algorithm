function solution(weights) {
    var answer = 0;
    const obj = {};
    const calculateArray = [1/1,2/3, 2/4, 3/4] // (2,3) (2,4) (3,4)
    weights.sort((a,b) => a-b); // 내림차순 정렬
    for(const weight of weights){
        for(const calculate of calculateArray){
            if(obj[calculate * weight]) {
                answer += obj[calculate * weight];
            }
        }
        if(obj[weight]) obj[weight]++;
        else obj[weight] = 1;
    }
    
    
    return answer;
}