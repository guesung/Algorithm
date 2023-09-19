function solution(s) {
//     객체
    const obj = {};
    const answer = s.split('').map((it,index)=>{
        const now = index-obj[it];
        obj[it] = index;
        if(now) return now;
        return -1;
    })
    return answer;
}