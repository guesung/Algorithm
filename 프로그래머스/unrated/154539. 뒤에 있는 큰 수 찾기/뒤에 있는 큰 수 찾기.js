function solution(numbers) {
    var answer = [];
//     그냥 하나씩 순회하면 O(n**2)이고, n이 최대 100만이라 시간초과 걸릴 것임
    
    const st = [];
    for(const number of numbers.reverse()){
        if(st.length===0){
            st.push(number);
            answer.push(-1);
            continue;
        }
        if(st[st.length-1]<=number){
            while(1){
                st.pop();
                if(st.length===0 || st[st.length-1]>number ) break;
            }
            if(st.length===0){
                answer.push(-1);
            }else{
                answer.push(st[st.length-1]);
            }   
        }else{
            answer.push(st[st.length-1]);
        }
        st.push(number);
        
    }
    
    
    return answer.reverse();
}