function solution(arr1, arr2) {
//     arr1과 arr2를 곱한 결과를 반환한다.
//     무슨 말이지? arr1에 arr2를 곱한다고 ?
//     3*1 + 4*3 = 15 / 2 * 5 + 3 * 4 + 2 * 3 = 10 + 12+ 6 = 28
//     10 + 12 + 6 = 28ㅋ
    
//     행렬 : n번째 행과 m번째 열의 곱
//     arr1 : n*m, arr2 : m*m
// 1. arr1을 순회한다.   

    const result = [];
    const n = arr1.length;
    const m = arr2[0].length;
    for(let i=0;i<n;i++){ // 하나의 행씩 순환한다.
        const arr = [];
        const currentColumn = arr1[i];
        for (let j=0;j<m;j++){
            const currentRow = arr2.map(it => it[j]);
            arr.push(currentColumn.reduce((prev,cur,index)=>prev+cur*currentRow[index],0));
        }
        result.push(arr);
    }
    return result;
}