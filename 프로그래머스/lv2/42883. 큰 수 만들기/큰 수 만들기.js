function solution(number, k) {
    var answer = '';
    const arr = [];
//     number를 순회를 돌며 하나씩 뺌
    if(number.length===k) return ""
    for(let i=0;i<number.length;i++){
       while(arr.length>0 && arr[arr.length-1]<number[i] && k){
           arr.pop();
           k--
       }
       arr.push(number[i])
    }
    arr.splice(number.length - k, k);
    return arr.join('');
}