function solution(brown, yellow) {
    var answer = [];
    
//     bronw + yellow = a * b
//     brown+yellow의 약수
//     ex) 48 -> 48의 약수 ; 1-48,2-24,3-16,4-12,6-8
//     이 중 각자의 수를 a,b라 할 때 (a-2)(b-2) = yellow이면 성공
    
    const n = brown + yellow;
    for(let i = n;i*i>=n;i--){
//         약수 ; i, n/i
        if(n%i===0 && (i-2)*(n/i-2)===yellow){
            return [i,n/i];
        }
    }

}