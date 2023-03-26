function solution(n) {
    return n.toString().split('').map((it,i)=>n.toString()[n.toString().length-i-1]).map(v=>+v);
}