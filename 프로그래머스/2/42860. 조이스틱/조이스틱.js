function solution(name) {
//     ABCDEFGHIJKLMNOPQRSTUVWXYZ
    
//     조이스틱을 최소한으로 움직여야 한다.
    
//     1. 현재 점을 목표에 맞게 바꾼다.
//     2. 이동한다. -> 우측 이동 / 좌측 이동
//     J -> 9번
//     JA -> 9번
//     JAN -> 9 + 1 + 13 = 23
//     왼쪽으로 이동할 지, 오른쪽으로 이동할 지 어떻게 알지?
    
//     J -> 9번
//     JE -> 9 + 1 + 5
//     JER -> JE + 1 + 
    
//      왼쪽으로 쭉 이동하던가, 오른쪽으로 쭉 이동하던가 둘 중 하나가 아닐 수 있겠다.
//     AZAAAAAAZZ
//     A에서 시작을 해서, 왼쪽이 나을까 / 오른쪽이 나을까 평가 -> 그 방향으로 이동 
    let cursor = 0;
    let cnt = 0;
    const nameArray = name.split('');
    const nameLength = name.length;
    
//     현재 cursor위치에서 가장 가까운 A가 아닌 좌표까지 이동 거리
//     AABAA_AAAAB
//     function getMinimumDistance(array, cursor){
//         let left = cursor;
//         let right = cursor;
//         let leftMove = 0;
//         let rightMove = 0;
        
//         while(1){
//             left --;
//             right ++;
//             if(array[left] === 'A') {
//                 left = (left - 1) || nameLength - 1;
//                 leftMove++;
//             }
//             if(array[right] === 'A') {
//                 right = (right + 1) % nameLength;
//                 rightMove++;
//             }
//             if(array[left] !== 'A' && array[left] !== 'A') break;
//         }
// //         ABBAAAAB
//         if(leftMove < rightMove)
//     }
    
    // while(1){
    //     if(nameArray.every(it=>it==='A')) break;
    //     cnt += getMinimumDistance(nameArray,cursor);
    // }
    
    
//         A부터 몇 번을 이동해야 해당 알파벳이 될 수 있느냐. 
    // 위로 올린 값 : 해당 알파벳에서 A를 뺀 값
//     아래로 내린 값 : Z에서 해당 알파벳을 빼고 1을 더한 값
    function getJoisticMove(alphabet){
        const alphabetCode = alphabet.charCodeAt(0);
        const ACode = 'A'.charCodeAt(0);
        const ZCode = 'Z'.charCodeAt(0);
        
        return Math.min(alphabetCode - ACode, ZCode - alphabetCode + 1);
    }
    
//     1. 오른쪽으로 쭉 가는 경우 -> 4번과 중복

    // const sum = name.split('').reduce((prev,cur)=>prev + getJoisticMove(cur), 0)
    
//     2. 오른쪽으로 가다가 왼쪽으로 가는 경우 -> 어디까지 오른쪽으로 갈 것이냐.
    let minCnt = Infinity;
    
    for(let turningPoint=0;turningPoint<name.length;turningPoint++){
        let cursor = 0;
        const nameArray = name.split('');
        let direction = 'right';
        let cnt = 0;
        while(1){
            cnt += getJoisticMove(nameArray[cursor]);
            nameArray[cursor] = 'A';
            
            if(nameArray.every(it => it==='A')) break;
            
            if(cursor === turningPoint) direction = 'left'; 
            
            if(direction === 'right') cursor = (cursor + 1) % name.length;
            if(direction === 'left') cursor = cursor - 1 < 0 ? name.length - 1 : cursor - 1;
            cnt ++;
        }
        minCnt = Math.min(minCnt, cnt)
    }
    
    for(let turningPoint=0;turningPoint<name.length;turningPoint++){
        let cursor = 0;
        const nameArray = name.split('');
        let direction = 'left';
        let cnt = 0;
        while(1){
            cnt += getJoisticMove(nameArray[cursor]);
            nameArray[cursor] = 'A';
            
            if(nameArray.every(it => it==='A')) break;
            
            if(cursor === turningPoint) direction = 'right'; 
            
            if(direction === 'right') cursor = (cursor + 1) % name.length;
            if(direction === 'left') cursor = cursor - 1 < 0 ? name.length - 1 : cursor - 1;
            cnt ++;
        }
        minCnt = Math.min(minCnt, cnt)
    }
    
    return minCnt;
    
//     3. 왼쪽으로 쭉 가는 경우 -> 2번과 중복
//     4. 왼쪽으로 가다가 오른쪽으로 가는 경우
    
    
    
    
}