function solution(r1, r2) {
    var answer = 0;
//     12 + 8 = 20
//     핵심 : 한 분면을 구해서, *4하면 된다.
//     x혹은 y축에 있는 점은 뺄셈으로 쉽게 구할 수 있다.
//     for문 : 1부터 r2-1 까지 순회
//     각 for문에서 r1**2 < i**2 + y**2 < r2**2 를 만족하는 y의 개수 구하기
//     r1**2 - i**2 < y**2 < r2**2 - i**2 
//     만약 r2가 100만이라면, 시간복잡도는 100만 ** 2이 될 것이다.
//     아닌가, 그 사이에 있는 점의 개수만 구하면 되기 때문에 시간복잡도가 100만일 수 있다.
//     사이에 몇 개 있는지 어떻게 알지. 

    let sum = r2 - r1 + 1;
    for(let i=1;i<r2;i++){
        const minX = Math.ceil((r1**2 - i**2)**(1/2)) || 1;
        const maxX = Math.floor((r2**2 - i**2)**(1/2)) || 1;
        
        sum += (maxX - minX + 1)
    }
    
    
    
    
    
    return sum*4;
}