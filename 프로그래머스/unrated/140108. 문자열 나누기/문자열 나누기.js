function solution(s) {
    var answer = 0;
    
    let x = '';
    let xCount = 0;
    let otherCount = 0;
    [...s].forEach(it=>{
        if(!x) x = it;
        if(x === it) xCount ++;
        else otherCount ++;
        
        if(xCount === otherCount && x!==it){
            answer ++;
            xCount=0;
            otherCount=0;
            x=''
        }

    })
    if(x) answer ++ 
    
    return answer;
}