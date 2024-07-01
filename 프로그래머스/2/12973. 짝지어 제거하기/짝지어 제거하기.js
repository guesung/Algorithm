function solution(s)
{
    var answer = -1;
    
//     1. 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾는다.
//     2. 둘을 제거한 뒤, 앞 뒤로 문자열을 이어 붙인다.
//     3. 문자열을 모두 제거한다면 짝지어 제거하기가 종료된다.
//     4. 완전히 제거했다면 1, 하지 않았다면 0을 리턴한다.
    
//     1. 순회한다.
//     2. 붙어 있는 문자열을 제거한다.
//     붙어 있는 문자열 -> 앞에서부터 순회하며 앞 문자 = 뒤 문자일 경우 발동.
//     정규표현식으로도 가능한가?
//     배열로 변환?하면 더 비교하기 편할까?
//     substr
//     concat, slice, splice는 배열 메서드이다.
//     slice는 문자열에도 가능하다.
    
//     while(true){
//         let isChanged = false;
//         for(let i=0;i<s.length-1;i++){
//             if(s[i] === s[i+1]){
// //                 i = 1이라면, i~i+1를 잘라내야한다(~i-1,i+2~)
//                 s = s.slice(0,i) + s.slice(i+2)
//                 isChanged=true;
//                 break;
//             }
//         }
//         if(!isChanged) break;
//     }
    
//     효율성테스트에서 실패했다. 문자열 길이가 최대 100만이니, 위의 방법대로 할 경우 100만 * 100만. 시간 초과가 뜰 법도 하다.
//     효율적으로 계산하는 방법에는 뭐가있으띾?
//     직접 모든 것을 계산하지 않고 계산하는 방법이 있을까?
//     1. 모든 문자의 개수가 짝수여야 한다.
//     2. aba -> 이러한 패턴이 나오면 무조건 0이다.
    
//     1. 앞에서부터 Stack에 담는다.
//     2. Stack에서 가장 위의 요소와 동일하면, pop한다.
//     3. 만약, Stack에 3개가 쌓이면 답은 무조건 0이다.
    // => O(n), n은 s문자열의 길이
    
    const stack = [];
    for(const it of s){
        if(stack.length === 0) {
            stack.push(it); // 비었다면, push
            continue;
        }
        if(stack.at(-1) === it) stack.pop(); // 같다면 pop, 다르다면 push
        else stack.push(it);
    }
    return + (stack.length === 0)
    
    
    
    
    
    
    

    return s ? 0 : 1;
}