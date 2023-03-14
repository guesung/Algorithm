function solution(n, m, section) {
    var answer = 0;
    
//     가장 작은 빵꾸부터 채우기
//     section[0] 칠하기 -> section[0],[1].. m개가 채워질 것
    for(let sec of section){
        if(sec===0) continue;
        answer+=1;
        for(let i=0;i<m;i++){
            if(section.includes(sec+i)){
                section.splice(section.findIndex(it=>it===sec+i),1,0)
            }
        }
        
    }
    return answer
}