function solution(sequence, k) {
//     연속된 n개의 합 = k인 조합을 찾아서, 길이가 가장 짧은, 인덱스가 가장 작은 조합 찾기
//     Dynamic Programming
//     Two Pointer
//     left, right 두 개의 포인터를 두고, 오름차순 정렬이 이미 되어 있기 때문에 크기가 k보다 크다면 left를 우측으로, k보다 작다면 right를 우측으로 이동한다.
    const sequenceList = [];
    const sequenceLength = sequence.length;
    let left=0, right=0, sum=sequence[0];
    //     시간 복잡도 O(n)

    while(1){
        if(sum<k){
            right ++;
            sum += sequence[right];
        }else if(sum>k){
            sum -= sequence[left];
            left ++;
        }else {
            sequenceList.push([left,right])
            sum -= sequence[left]
            left ++;
        }
        if(left>right || right === sequenceLength || left === sequenceLength ) break;
    }
//     1. 길이가 가장 짧은 요소
    sequenceList.sort((a,b) => (a[1]-a[0])-(b[1]-b[0]))
    return sequenceList[0];
}