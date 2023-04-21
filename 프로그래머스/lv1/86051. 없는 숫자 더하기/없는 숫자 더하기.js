function solution(numbers) {
    
    // 찾을 수 없는 0~9숫자를 모두 찾아 더한 수를 ruturn
    const list = new Array(10).fill(false)
    for (const number of numbers){
        list[number]=true;
    }
    let sum =0;
    list.forEach((it,i)=>{
        if(!it) sum+=i
    })
    
    
    
    return sum;
}