function solution(t, p) {
    var answer = 0;
//     1. p길이 구하기
//     2. p길이 만큼 t를 자르며 순회하기
//     3. 순회하며 개수 세기(p보다 크기가 작은지/큰지)
    const pLength = p.length;
    
    for(let i=0;i+pLength<=t.length;i++){
        const it = +t.substr(i,pLength);
        console.log(it,+p)
        if(it<=+p) answer++;
    }
    return answer;
}