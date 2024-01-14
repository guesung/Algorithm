function solution(data, col, row_begin, row_end) {
    var answer = 0;
//     열 = 컬럼
//     행 = 튜플
    
//     1. col번째 컬럼을 값을 기준으로 오룸차순 정렬 ([col-1])
//     1.1. 만약 동일한 값이 있다면, 첫 번재 칼럼 값 기준 내림차순 정렬([0])
    data.sort((a,b) => b[0]-a[0]).sort((a,b)=>a[col-1] - b[col-1])
//     2. row_begin ~ row_end 순환
    const array = [];
    for(let i=row_begin;i<=row_end;i++){
        const nowData = data[i-1];
        const sum = nowData.reduce((prev,cur)=>prev+cur%(i),0)
        array.push(sum);
    }
//     3. xor 계산
    const result = array.reduce((prev,cur)=>prev^cur,0)
    return result;
}