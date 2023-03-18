function solution(sequence) {
    
    let sequence1 = sequence.map((it,i)=>it*(-1)**(i));
    let sequence2 = sequence.map((it,i)=>it*(-1)**(i+1));
    let prev;
    let answer = -Infinity;
    sequence1 = sequence1.map((it,i)=>{
        if(i===0) prev=it;
        else prev = Math.max(it,prev+it);
        answer = Math.max(answer,prev);
        return prev;
    })
    sequence2 = sequence2.map((it,i)=>{
        if(i===0) prev=it;
        else prev = Math.max(it,prev+it);
        answer = Math.max(answer,prev);
        return prev;
    })
    return answer
}