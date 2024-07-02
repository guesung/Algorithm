const gcd = (a,b) => {    
    if(b===0) return a;
    return gcd(b, a%b);
}
const lcm = (a,b) =>{
    return (a*b)/gcd(a,b)
}

const solution = (arr) => {
//     1. 최대공약수 구하기
//     2. 각 수의 곱 / 최대공약수**(개수-1)
    let lcm_value=arr[0];
    for(let i=1;i<arr.length;i++){
       lcm_value = lcm(lcm_value,arr[i]);
    }
    return lcm_value
};