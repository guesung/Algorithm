function solution(n) {
    if(parseInt(n**(1/2)) === n**(1/2)) return ((n)**(1/2)+1)**2;
    else return -1
}