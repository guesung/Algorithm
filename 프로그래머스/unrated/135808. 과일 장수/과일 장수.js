function solution(k, m, score) {
    var answer = 0;
    const sortedScore = score.sort((a,b)=>b-a)
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