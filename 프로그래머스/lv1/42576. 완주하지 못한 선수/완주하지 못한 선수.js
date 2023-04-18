function solution(participant, completion) {
    var answer = '';
    
//     동명이인이 있을 수 있음 => includes로는 해결 x, 매칭되는 개수가 필요해 => 객체 자료형 사용
//     key : 참가자 이름, value : 명 수
    const obj = {};
    participant.forEach(it=>{
        obj[it]=(obj[it]||0)+1;
    })  
    completion.forEach(it=>{
        if(!--obj[it]) delete obj[it]
    })
    
    return Object.keys(obj)[0]
    
    
}

