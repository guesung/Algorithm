function solution(orders, course) {
    const ordered = {};
    const candidates = {};  
    const maxNum = Array(10 + 1).fill(0); // 11개의 0으로 채운 배열을 만듬
    const createSet = (arr,start,len,foods) => {
//         dfs를 이용한 함수
        if(len===0){
            ordered[foods]=(ordered[foods]||0)+1;
            // ordered[foods]을 취하거나, 없다면 0을 취함
            if(ordered[foods]>1) candidates[foods] = ordered[foods];
//             2명 이상이 같은 음식을 선택했다면 candidates객체에 집어 넣음
            maxNum[foods.length]=Math.max(maxNum[foods.length],ordered[foods]);
            return;
        }
        
        
//         arr,visited를 사용하지 않고 이런 dfs문이 가능하네.
//         i=start부터 시작하고, i+1을 start값으로 넘겨줌
        for(let i=start;i<arr.length;i++){
//         i=0이 아닌 start부터 시작함으로써 중복된 값 들어가지 않고 순차적으로 들어감
//         foods+arr[i]를 넘김으로써 문자열에 계속 합해 나감
            createSet(arr,i+1,len-1,foods+arr[i]);
            
        }
    }
    
    orders.forEach((od)=>{
        const sorted = od.split('').sort();
        // sort()는 기본적으로 문자열 순으로 정렬
        course.forEach((len)=>{
//             최대 길이를 설정하기 위한 forEach문
            createSet(sorted,0,len,'');
//             createSet() ; 조합을 만들어줌 | len ; 최대 길이
        })
    })

    console.log(candidates,maxNum)
    const launched = Object.keys(candidates).filter(
        (food)=>maxNum[food.length]===candidates[food]
    );
    return launched.sort();
}