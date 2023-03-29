function solution(s, skip, index) {
    var answer = '';
    
    // console.log('a'.charCodeAt(0))
    
    let chars = 'abcdefghijklmnopqrstuvwxyz'
    
    for(let it of skip){
        chars=chars.replace(it,'');
    }
    for(let it of s){
        answer+=(chars[(chars.indexOf(it)+index)%chars.length])
        
    }
    console.log(chars)
    
    
    return answer;
}