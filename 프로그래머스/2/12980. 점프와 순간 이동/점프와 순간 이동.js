function solution(n)
{
//     K칸 앞으로 점프 / 현재까지 온 거리 * 2 이동 순간이동
//     순간이동 : 건전지 사용량이 줄지 않는다.
//     점프 : 건전지 사용량이 K만큼 준다.
//     N만큼 떨어진 장소

//     1. 최대한, 순간이동을 많이 활용하는 것이 유리하다.
    
//     e.g. 5
//     (현재 위치,사용한 점프 개수)
//     1. 1만큼 이동한다. (1,1)
//     2. 순간이동한다 (2,0)
//     3. 순간이동한다 (4,0)
//     4. 1만큼 이동한다. (5,2)
    
//     점프 : +1
//     순간이동 : 현재 위치 * 2
    
//     누적합을 이용하면 될 듯하다.
    
//     n번 째 장소에 가기 위한 가장 최적의 방법은 Math.min(arr[n/2],arr[n-1]+1)이다.
//     n이 짝수인 경우 위와 같이 하면 되지만, 홀수인 경우는 불가능하다. 무조건 +1을 해서 와야 한다. 두배수가 불가능하기 때문이다.
    
//     const arr = new Array(n+1).fill(0)
//     arr[1] = 1;
//     for(let i=2;i<=n;i++){
//         if(i%2===0){
//             arr[i] = Math.min(arr[i/2],arr[i-1]+1);
// //             전자는 순간이동, 후자는 점프
//         }else{
//             arr[i] = arr[i-1]+1;
//         }
//     }
//     return arr[n]
    
    
    // 문제 : 시간 초과
//     N은 최대 10억이다 .. 다른 방법이 필요하다.
//     정말로 앞에서부터 차례대로 계산해야 할까?뒤에서부터 계산하면 안될까?
//     e.g. 10만 5가 있다. -> 10만 4로 간다(점프) -> 5만 2로 간다. (순간이동)
//     2로 나눌 수 있다면 2로 나누고, 불가능하면 1을 빼고, 이런 식이 최단 경로일까?
//     6 -> 3 -> 2! -> 1 -> 0! : 2
//     10 -> 5 -> 4! -> 2 -> 1 -> 0! : 2
    let cnt = 0;
    while(n !== 0){
        if(n%2 === 0){
            n /= 2;
        }else{
            n -= 1;
            cnt ++;
        }
    }
    return cnt;
}