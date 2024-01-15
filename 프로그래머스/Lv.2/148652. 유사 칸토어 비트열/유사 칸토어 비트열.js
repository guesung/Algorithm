function solution(n, l, r) {
    var answer = 0;
    
//  1101111011000001101111011
//     0 : 3,8,11-15,18,23.. 
//     1차적인 값 : 5로 나누었을 때 나머지 = 3
//     2차적인 값 : 11-15, : 5로 나누었을 때 5로 나누었을 때(Math.ceil) 나머지 = 3
    let array = new Array(r-l+1).fill().map((_,i)=>i+l);
    while(1){
        array = array.filter(it => !(it%5===3)).map(it => Math.ceil(it/5));
        if(array.every(it=>it===1)) break;
    }
    return array.length;
}