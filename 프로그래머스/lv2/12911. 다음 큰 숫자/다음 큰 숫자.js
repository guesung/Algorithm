function solution(n) {
//     1. n을 2진수로 변환
//     2. 1의 개수 파악
//     3. n부터 1씩 더해가며, 1의 개수가 같다면 break;
    let l= n.toString(2).split('').filter((it)=>it==='1').length
    for(let i=n+1;;i++){
        if(i.toString(2).split('').filter((it)=>it==='1').length === l) {
            return i;
        }
    }
}