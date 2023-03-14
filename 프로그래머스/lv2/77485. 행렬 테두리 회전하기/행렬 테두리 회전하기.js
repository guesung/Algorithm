function solution(rows, columns, queries) {
    var answer = [];
    // const arr=[[]];
    const arr = Array.from(Array(rows), () => Array(columns).fill(0))
    // arr[0][0] = 0;
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            arr[i][j] = i*columns+j+1
        }
    }
//     회전을 시켜야 함
//           시계방향으로
//           2,2,5,4라면-> 2,2|2,3|2,4|
//           x좌표 1씩 증가 > y좌표 1씩 증가 > x좌표 1씩 감소 > y좌표 1씩 감소
    let tmp, minValue;
    queries.forEach((it)=>{
        it = it.map(i=>i-1)
        const [x1,y1,x2,y2] = it;
        tmp = arr[x1][y1];
        minValue = Infinity;
        for(let i=x1;i<x2;i++){
            minValue = Math.min(minValue,arr[i][y1])
            arr[i][y1] = arr[i+1][y1];
        }
        for(let i=y1;i<y2;i++){
            minValue = Math.min(minValue,arr[x2][i])
            arr[x2][i]=arr[x2][i+1];
        }
        for(let i=x2;i>x1;i--){
            minValue = Math.min(minValue,arr[i][y2])
            arr[i][y2] = arr[i-1][y2];
        }
        for(let i=y2;i>y1;i--){
            minValue = Math.min(minValue,arr[x1][i])
            arr[x1][i] = arr[x1][i-1];
        }
        arr[x1][y1+1] = tmp;
        answer.push(minValue)
    })
    
    return answer;
}