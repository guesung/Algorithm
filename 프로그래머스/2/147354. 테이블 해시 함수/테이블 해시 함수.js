function solution(data, col, row_begin, row_end) {
    var answer = 0;

//     data : 테이블의 데이터, col : 해시 함수에 대한 입력, row_begin : 
//     열 : 컬럼, 행 : 튜플
//     첫 번째 열 : 기본키
//     col번째 컬럼의 값을 기준으로 오름차순 정렬. 동일하다면 기본키인 첫 번째 칼럼의 값을 기준으로 내림차순 정렬
//     S_i : i번째 행의 튜플에 대해 각 컬럼의 값을 i로 나눈 나머지들의 합
    
    
//     S_2 = (2 mod 2) + (2 mod 2) + (6 mod 2) = 0
//     S_3 = (1 mod 3) + (5 mod 3) + (10 mod 3) = 4 
    
//     1. col번 째 컬럼의 값을 기준으로 올므차순 정렬
//     2. 동일하다면 기본키인 첫 번째 칼럼을 기준으로 내림차순 정렬
//     3. S_i : i번 째 행의 튜플에 대해 각 칼럼의 값을 i로 나눈 나머지들의 합
    data.sort((a,b) => a[col-1] - b[col-1] || b[0] - a[0]);
    function xor(a,b){
        return a^b
    }
    return data
        .slice(row_begin-1,row_end) // 2,3
        .reduce((prevItem,curItem,i)=>{
            const a = curItem.reduce((prev,cur)=> prev + cur % (i+row_begin) ,0)
            return xor(prevItem ?? 0,a);
        },0)
}