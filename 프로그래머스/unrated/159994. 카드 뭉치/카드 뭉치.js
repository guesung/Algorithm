function solution(cards1, cards2, goal) {
    var answer = '';
    let [pos1,pos2]=[0,0]
    
    for(let it of goal){
        if(pos1 < cards1.length && cards1[pos1]===it){
            pos1+=1;
            continue;
        }
        if(pos2 < cards2.length && cards2[pos2]===it){
            pos2+=1;
            continue;
        }
        return 'No';
    }
    return 'Yes'
    
    return answer;
}