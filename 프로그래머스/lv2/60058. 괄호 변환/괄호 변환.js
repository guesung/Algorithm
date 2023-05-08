function solution(p) {
    var answer = '';    
    
    let st = [];
    for(let i=0;i<p.length;i++){
        if(p[i]===')'){
            if(st[st.length-1]==='('){
                st.pop();
//                     올바른 괄호 문자열이라면
                if(st.length===0) {
                    answer = p.slice(0,i+1) + solution(p.slice(i+1))
                    return answer;
                }
                
            }else{
                st.push(p[i])
            }
        }else{
            st.push(p[i])
        }
        // console.log(st.filter(it=>it===')').length , st.filter(it=>it==='(').length)
//             균형잡힌 괄호 문자열이라면
        if(st.filter(it=>it===')').length === st.filter(it=>it==='(').length)  {
            answer = '(' + solution(p.slice(i+1)) + ')'
            for(let j=1;j<i;j++){
                if(p[j]==='('){
                    answer += ')'
                }else{
                    answer += '('
                }
            }
            return answer;
        }
    }
    

    return answer;
}