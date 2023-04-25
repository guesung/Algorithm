function solution(n, words) {
    let result =[];

//     1. 전 단어의 끝말로 시작했는지 체크 -> 이전 단어의 끝말 저장 ; temp
//     2. 탈락자 ; (i/n)+1 
//     3. x번 쨰 ; i+1
//     4. 배열에 저장 -> 배열에 이미 있다면 stop
//     [i/n+1,i+1]
    
    let temp="";
    const arr = [];
    
    words.forEach((it,i)=>{
        if(result.length>0) return;
        if(i>0 && it[0]!==words[i-1].split('').slice(-1)[0]){
            result = [i%n+1,Math.ceil((i+1)/n)];
            return;
        }
        if (arr.includes(it)){
            result = [i%n+1,Math.ceil((i+1)/n)];
            return;
        }
        arr.push(it)
    })
    if(result.length===0) return [0,0]
    else return result;
}