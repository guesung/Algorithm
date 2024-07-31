function solution(user_id, banned_id) {
    var answer = 0;
    
//     인자
//     1. user_id : 입력 아이디
//     2. banned_id : 불량 사용자
//     리턴값
//     당첨에서 제외되어야 할 제재 아이디 목록은 몇 가지 경우의 수가 가능한 지
//     불량 사용자'
//     조건
//     1. 불량 사용자의 일부 문자를 *로 가려서 전달한다. *는 최소 하나 이상의 문자를 의미한다.
//     2. 같은 응모자 아이디가 중복해서 제재 아이디 목록에 들어가는 경우는 없다.(즉, banned_id가 곂치는 user_id는 없다.)
//     3. 순서는 상관없다.
//     4. 두 가지 banned_id가 하나의 user_id는 가리킬 수 있다.
//     5. banned_id 하나는 banned_id 하나를 가리킨다.
    
//     시간 복잡도
//     1. user_id배열은 최대 8
//     풀이
//     1. banned_id를 순회하며, 가능한 경우를 체크한다.
    // 2. 
    
//     1. user_id에서 banned_id개수만큼 모은다(DFS). 이 때, 순서는 무관하다. 모든 경우의 수를 구한다. 
//     이 때, user_id와 banned_id는 최대 8이다.
//     2. banned_id와 1:1로 매칭하며 모든 경우가 해당하는 지 체크한다.
//     이렇게 모든 경우를 구하면 시간초과에 걸린다. 최대 8^8 = 1600만인데.? 안걸리나? 
    const result = [];
    function dfs(arr){
        if(arr.length === banned_id.length){
//             word : 'frodo', 'fradi'
//             wordIndex : 0,1
//             it : 'f','r','o','d','o'
//             index : 0,1,2,3,4
            // if(arr.every((word,wordIndex) => word.split('').every((it,index) => banned_id[wordIndex][index] === it || banned_id[wordIndex][index] === '*' && banned_id[wordIndex].length === word.length))) {
            //     result.push(arr)
            // }
            if(banned_id.every((word,wordIndex) => word.split('').every((it,index) => (it === arr[wordIndex][index] || it === '*') && word.length === arr[wordIndex].length))){
                result.push(arr)
            }
            return;
        }
        for(const user of user_id){
            if(arr.includes(user)) continue;
            dfs([...arr,user]);
        }
    }
    dfs([])
    
    return new Set(result.map(it => it.sort().join(','))).size
}