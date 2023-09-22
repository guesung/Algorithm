function solution(k, m, score) {
    var answer = 0;
//     박스 수 = score.length/m;
//     가장 큰 숫자끼리 모아놓는 것이 이득
//     정렬
    
    const sortedScore = score.sort((a,b)=>b-a)
//     앞에서부터 m개씩 곱하고 이를 더함
    let arr = [];
    let sum = 0;

    sortedScore.forEach((it)=>{
        arr.push(it);
        if(arr.length===m){
            sum += m * (arr[m-1]);
            arr = [];
        }
    })
    return sum;
}