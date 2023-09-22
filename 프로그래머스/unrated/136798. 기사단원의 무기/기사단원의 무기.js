function solution(number, limit, power) {
    var answer = 0;
    
    const getDivisor = (num) => {
        const divisors = [];
        for (let i=1;i<=Math.sqrt(num);i++){
            if(num%i===0){
                divisors.push(i);
                if(num/i != i) divisors.push(num/i);
            }
        }
        return divisors.length;
    }

    const numberArray = Array(number).fill(0).map((it,a)=>a+1);
    
    const numberDivisorArray = numberArray.map(it=>getDivisor(it));
    
    return numberDivisorArray.filter(it=>it<=limit).reduce((prev,cur)=>prev+cur) + numberDivisorArray.filter(it=>it>limit).length * power
    
    return answer;
}