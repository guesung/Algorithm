function solution(numbers) {
//     1. 2진수로 변환
//     2. 1,3,7,... 문자열에 맞춰서 앞에 0을 붙힘
//     3. 각 경우 별 트리의 조건에 성립하는 지 판단 -> 트리인지 체크하는 함수 (재귀함수)

    const makeTree = (number) => {
        let [num,temp] = [0,1];
        while(num<number.length){
            num+=temp;
            temp*=2;
        }
        number = '0'.repeat(num-number.length)+ number ;
        return [number, 0, number.length-1]
    }
    
    
    function isTree ([b_str, start, end]) {
        //부모 노드 idx
        const mid = Math.floor((start+end) / 2);
        //자식 노드 idx
        const left_c = Math.floor((start + mid-1)/2);
        const right_c = Math.floor((mid+1 + end)/2);

        //리프노드 도달
        if (start == end) {
            return true;
        }

        
        //부모가 0 인데 자식에 1이 있으면 안됨 -> 이 경우 false 를 반환
        if (b_str[mid] === '0' && ((b_str[left_c] === '1') || (b_str[right_c] === '1'))) {
            return false;
        }

        if (!isTree([b_str, start, mid-1])) return false;
        if (!isTree([b_str, mid+1, end])) return false;
        return true;
    }

    return numbers.map(v=>isTree(makeTree(v.toString(2)))?1:0)

}