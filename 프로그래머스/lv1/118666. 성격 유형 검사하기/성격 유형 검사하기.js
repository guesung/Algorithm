function solution(survey, choices) {
    var answer = '';
//     1,2,3 / 4 / 5,6,7
    // const scoreList = new Array(4).fill(0);
    const scoreList = {
        "R":0,'T':0,'C':0,'F':0,'J':0,'M':0,'A':0,'N':0
    }
//     동점이라면 사전순으로 빠른 것
    survey.forEach((it,i)=>{
        switch(choices[i]){
            case 1:
                scoreList[it[0]]+=3;
                break;
            case 2:
                scoreList[it[0]]+=2;
                break;
            case 3:
                scoreList[it[0]]+=1;
                break;
            case 5:
                scoreList[it[1]]+=1;
                break;
            case 6:
                scoreList[it[1]]+=2;
                break;
            case 7:
                scoreList[it[1]]+=3;
                break;
        }
    })    
    answer += scoreList.R>=scoreList.T ? 'R' : 'T'
    answer += scoreList.C>=scoreList.F ? 'C' : 'F' 
    answer += scoreList.J>=scoreList.M ? 'J' : 'M'
    answer += scoreList.A>=scoreList.N ? 'A' : 'N'
    
    return answer;
}