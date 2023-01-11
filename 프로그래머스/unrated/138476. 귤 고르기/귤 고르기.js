function solution(k, tangerine) {
    // tangerine.sort();
    
    const obj = {};
    tangerine.forEach(tang=>obj[tang] = (obj[tang]||0) +1)

    // console.log(obj)
    let sum = 0;
    const arr = Object.values(obj).sort((a,b)=>b-a)
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        if(sum>=k) {
            return i+1;
        }
    }
}