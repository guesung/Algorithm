const getGcd = (a,b) => b>0 ? getGcd(b,a%b):a;

function solution(arrayA, arrayB) {
//     A배열에는 모두 나눌 수 있고, B배열에는 모두 나눌 수 없는 값
//     혹은 그 반대
    
//     1. 최대공약수 구하기
//     2. 최대공약수로 -> 상대편 배열의 값을 모두 나눌 수 없다면 그 값을 선택
//     3. [40,60],[60,80] ->  
//     4. 만약 최대공약수로 나뉜다 -> 최대공약수의 약수들도 모두 나뉠 것이므로 break;
    let result;
    const gcdA = arrayA.reduce((prev,cur) =>getGcd(prev,cur),arrayA[0]);
    // for(const it of arrayB){ // for..of에서 끝까지 탐색했는 지 어떻게 파악하지
    for(let i=0;i<arrayB.length;i++){
        if(arrayB[i] % gcdA === 0) {
            result=0;
            break;
        }
        if(i===arrayB.length-1) {
            result = gcdA;
        }
    }
    const gcdB = arrayB.reduce((prev,cur) =>getGcd(prev,cur),arrayB[0]);

    for(let i=0;i<arrayA.length;i++){
        if(arrayA[i] % gcdB === 0 && ! (result > 0) ) {
            result = 0;
            break;
        }
        if(i===arrayA.length-1) result = Math.max(result,gcdB);
    }
    return result;
}