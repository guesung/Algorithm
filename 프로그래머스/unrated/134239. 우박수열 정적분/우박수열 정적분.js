function solution(k, ranges) {
    var answer = [];
    const v = [];
    v[0]=k;
    while(true){
        if(k%2==0){
            k/=2;
        }else{
            k=k*3+1;
        }
        v.push(k);
        if(k<=1) break;
    }
    console.log(v)
    const s = [];
    v.forEach((it,i)=>{
        s.push((it+v[i+1])/2);
    })
    const l = v.length;
    let value;
    ranges.forEach(([a,b])=>{
        if(a>l+b-1) {
            answer.push(-1);
            return;
        }
        value=0;
        for(let i=a;i<l+b-1;i++){
            value+=s[i];
        }
        answer.push(value);
    })
    console.log(answer)
    
    return answer;
}