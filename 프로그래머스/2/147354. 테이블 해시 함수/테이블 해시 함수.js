function solution(data, col, row_begin, row_end) {
    var answer = 0;
//     1. col을 기준으로 오름차순 정렬
//     2. 만약 col기준으로 동일한 값이라면, 첫번째 칼럼의 값을 기준으로 내림차순 정렬
    data.sort((a,b) => {
        if(a[col-1]===b[col-1]) return b[0] - a[0]
        return a[col-1] - b[col-1]
    })
//     3. row_begin ~ row_end인 모든 i값으로 S_i를 누적하여 더하기
    const modArray = [];
    for (let row=row_begin;row<=row_end;row++){
        const currentData = data[row-1];
        const currentSum = currentData.reduce((prev,cur)=>prev + cur % row ,0)
        modArray.push(currentSum)
    }
    return modArray.reduce((prev,cur)=>prev^cur,0)
}
