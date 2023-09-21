function solution(k, score) {
    var answer = [];
//     k번째 이내이면 오름. 
//     k번째 이내 -> arr와 score에 추가 | 이외 -> 변화 x
//     발표 점수 : k번째인 사람
//     arr배열의 최대 크기 = k
    
    const arr = [];
    score.forEach((it,index)=>{
        arr.push(it)
        arr.sort((a,b)=>b-a)
        if(index+1<=k){
            answer.push(arr[arr.length-1]);
        }else{
            answer.push(arr[k-1])    
        }
    })
    

    return answer;
}