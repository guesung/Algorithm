function solution(s) {
//     stack이용
    const st = [];
    s.split('').forEach((it)=>{
        if(st.length===0) st.push(it);
        else{
            if(st[st.length-1]===it){
                st.pop();
            }else{
                st.push(it)
            }
        }
    })
    return Number(st.length===0);

}