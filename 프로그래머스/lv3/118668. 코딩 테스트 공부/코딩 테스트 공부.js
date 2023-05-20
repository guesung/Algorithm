let targetAlp = 0;
let targetCop = 0;
let visit = [];
function solution(alp, cop, problems) {
    let answer = 0;
    for(let i=0; i<problems.length; ++i){
        targetAlp = Math.max(targetAlp, problems[i][0]);
        targetCop = Math.max(targetCop, problems[i][1]);
    }
    for(let i=0; i<151; ++i){
        let temp = [];
        for(let j=0; j<151; ++j){
            temp.push(987654321);
        }
        visit.push(temp);
    }
    DFS(alp, cop, 0, problems);
    answer = visit[targetAlp][targetCop];
    return answer;
}
function DFS(a, c, cnt, problems) {
    if(targetAlp < a){
        a = targetAlp;
    }
    if(targetCop < c){
        c = targetCop;
    }
    if(visit[a][c] <= cnt){
        return;
    }
    visit[a][c] = Math.min(visit[a][c], cnt);
    if(a === targetAlp && c === targetCop){
        return;
    }
    for(let i=0; i<problems.length; ++i){
        if(a >= problems[i][0] && c >= problems[i][1]){
            let nextAlp = a+problems[i][2];
            let nextCop = c+problems[i][3];
            DFS(nextAlp, nextCop, cnt+problems[i][4], problems);
        }
    }
    DFS(a+1, c, cnt+1, problems);
    DFS(a, c+1, cnt+1, problems);    
}