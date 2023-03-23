function solution(cards) {
    var answer = 0;
    
    const lst = [];
    let cnt = 0;
    cards=cards.map(it=>it-1);
    const vt = [];
    
    //곱했을 때 최고 점수 ; 각각의 점수가 최고 점수 여야 함
    for(let i=0;i<cards.length;i++){
        if(vt.includes(i)) continue;
        cnt = 0;
        let tmp = i;
        while(true){
            vt.push(tmp);
            tmp=cards[tmp];
            cnt++;
            if(vt.includes(tmp)){
                lst.push(cnt);
                break;
            }
        }
    }
    if(lst.length===1) return 0;
    lst.sort((a,b)=>b-a);
    return lst[1]*lst[0]
}