const isDiagnoal = ([aY,aX],[bY,bX]) => Math.abs(aX-bX) === Math.abs(aY-bY) // 대각선인지 체크
const isHasDiagonal = (arr) => {
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(isDiagnoal(arr[i],arr[j])) return true;
        }
    }
    return false;
}
const isAllNotDiagonal = (arr) => {
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(isDiagnoal(arr[i],arr[j])) return false;
        }
    }
    return true;
}


function solution(n) {
    let cnt = 0;
    
    function dfs(arr){
        if(arr.length === n){
            const newArr = arr.map((it,index)=>[index,it])
            if(isAllNotDiagonal(newArr)) cnt++;
            return;
        }
        
        for(let i=0;i<n;i++){
            if(arr.includes(i)) continue; // 같은 세로 선상에 있는 지 체크
            if(isHasDiagonal(arr.map((it,index)=>[index,it])))  return; // 대각선에 있는지 체크
            arr.push(i);
            dfs(arr);
            arr.pop();    
            
        }
    }
    
    dfs([])
    return cnt;
}

