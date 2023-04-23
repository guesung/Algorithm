function solution(numbers) {
    // 앞의 수가 큰 수가 와야 큰 수라느 것을 이용
    numbers=numbers.map(v=>v+'').sort((a,b)=>(b+a)-(a+b));
    return numbers[0]==='0'?'0':numbers.join('')
}