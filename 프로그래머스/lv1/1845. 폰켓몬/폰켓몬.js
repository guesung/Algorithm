function solution(nums) {
    var answer = 0;
    
//     종류 : 최소 1 ~ 최대 nums/2
//     종류를 구해서, Math.min(nums/2,종류) 하면 됨
//     종류 구하는 법 : Set 이용
    
    const set = new Set();
    nums.forEach(it=>{
        set.add(it)
    })
    return Math.min(nums.length/2,set.size)
    
    
    return answer;
}