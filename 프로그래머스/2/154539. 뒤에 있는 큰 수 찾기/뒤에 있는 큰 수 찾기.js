function solution(numbers) {
    var answer = [];
    
//     큰 뒷수 : 자신보다 크면서 가장 가까이 있는 수
//     큰 뒷수로 변환하고, 없다면(모두 자기보다 작다면) -1
//     가장 마지막 요소보다 작은게 나온다 > pop
//     가장 마지막 요소보다 큰게 나온다 > push
//     비었다 > push
//     2중 for문을 돌릴 경우 O(n**2)인데, m이 최대 100만이므로 시간초과이다. O(n)에서 끝내야한다.
    
//     뒤에서부터 순회를 한다.
//     현재 배열이 비었다면, -1을 추가한다.
//     가장 위의 요소가 현재 요소보다 작다면, 가장 위의 요소가 현재 요소보다 클 때까지 pop한다. 이 때 배열이 비었다면 -1을 추가하고, 무언가 있다면 마지막 요소를 추가한다.
//     반대로 크다면, 마지막 요소를 등록하고, 현재 요소를 push한다.
    numbers.reverse();
    const result = [], stack = [];
    for(const number of numbers){
        while(1){
            if(stack.length===0) {
                stack.push(number);
                result.push(-1)
                break;
            }
            if(number>=stack[stack.length-1]){
                stack.pop();
            }else{
                result.push(stack[stack.length-1]);
                stack.push(number)
                break;
            }
        }
    }
    result.reverse()
    
    return result;
}