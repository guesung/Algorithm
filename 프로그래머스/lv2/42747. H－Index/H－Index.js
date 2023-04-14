function solution(citations) {
    
    // h번 이상 인용된 논문이 h편 이상 -> 이 h의 최대값
    let i,cnt;
    for(i=1;i<=10000;i++){
        cnt=0;
        citations.forEach((it)=>{
            if(it>=i) cnt++;
        })
        if(cnt<i) break;
    }
    return i-1;
    // return answer;
}