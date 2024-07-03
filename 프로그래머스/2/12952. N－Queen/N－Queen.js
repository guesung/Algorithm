const isAllDifferent = (arr) => arr.length === new Set(arr).size;
const isDiagnoal = ([aY,aX],[bY,bX]) => Math.abs(aX-bX) === Math.abs(aY-bY)
// const isAllNotDiagonal = (arr) => arr.every((current) => arr.every(compare => !isDiagnoal(current,compare)))

const isAllNotDiagonal = (arr) => {
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(isDiagnoal(arr[i],arr[j])) return false;
        }
    }
    return true;
}


function solution(n) {
//     퀸은 가로, 세로, 대각선으로 이동이 가능하다.
//     n개의 퀸이 서로 한 번에 공격할 수 없는 경우의 수를 구하여라.
//     n은 최대 12이다.
//     총 칸의 수는 16이다. 최대 반복 횟수 : 16개의 칸에 8개를 배치하는 경우의 수, 16C8이다
//     1. 퀸을 배치한다. (DFS)
//     2. 유효한 배치인 지 구한다. 유효하다면 cnt+1.
//     유효한 배치 : 모든 퀸이 서로 같은 가로, 같은 세로, 같은 대각선에 위치하지 않으면 true, 하나라도 곂치면 false이다.
    
    // dfs(arr,n);
    
    
//     문제를 잘못 이해했었다. 가로,세로 크기도 n에 의해 정해지는구나.
//     그렇다면, 각 퀸은 각 줄에 하나씩 놓아야 한다.
//     모든 경우의 수는, n개의 돌을 n개의 위치에 각각 놓을 수 있으니, n*n이다
    
//     0~n-1을 n개의 1차원 배열에 채워 넣는다 -> 유효한 지 체크한다(여기서는 대각선만 체크하면 된다.)
    let cnt = 0;
    function dfs(arr){
        if(arr.length === n){
    //         대각선상에 위치하지 않는 지 체크
            const newArr = arr.map((it,index)=>[index,it])
            if(isAllNotDiagonal(newArr)) cnt++;
            return;
        }
        for(let i=0;i<n;i++){
            if(arr.includes(i)) continue;   // 이미, 값이 있다면. 즉, 같은 세로선상에 위치한다면
            if(isAllNotDiagonal(arr.map((it,index)=>[index,it]))){
                arr.push(i);
                dfs(arr);
                arr.pop();    
            }
        }
    }
    dfs([])
    return cnt;
}

