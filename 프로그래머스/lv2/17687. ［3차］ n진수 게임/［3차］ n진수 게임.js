function solution(n, t, m, p) {
    var answer = '';
//     문자열에 더해가는 방식
    let word = "";
    for(let i=0;;i++){   
        if(word.length>t*m) break;
        word+=i.toString(n).toUpperCase();
    }
    
    
//     인원(m)은 사이클을 결정, 순서(p)는 순서를 결정
    for(let i=0;i<word.length;i++){
        // console.log(word[i])
        if((i+1)%m===p%m) answer+=word[i]
    }
    // console.log(word)
    
    
    
    return answer.slice(0,t);
}