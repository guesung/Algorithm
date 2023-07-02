function solution(new_id) {
    var answer = '';
//     1. 대문자 -> 소문자
    let id = new_id.toLowerCase();
//     2. 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표 제외 제거
    const regex = /[a-z]|[\d]|[-]|[_]|[.]/;
    id = id.split('').filter((it)=>regex.test(it))
//     3. 2번 이상 연속 ..를 .로 치환
    
    for (let i =0; i<id.length;i++){
        if(id[i]==='.' && id[i+1]==='.'){
            id.splice(i,1)  
            i--;
        }
    }
    
//     4. 처음이나 끝에 .라면 제거
    if(id[0]==='.'){
        id.shift();
    }
    if(id[id.length-1]==='.'){
        id.pop();
    }
//     5. id가 빈 문자열이면 'a'대입
    if(id.length===0){
        id.push('a');
    }
//     6. 16자 이상이라면 15자 제외 제거
    if(id.length>=16){
        id.splice(15);
    }
//     7. 2자 이하라면 마지막 문자 반복
    if(id.length<=2){
        while (true){
            id.push(id[id.length-1])
            if(id.length===3) break;
        }
    }
    if(id[0]==='.'){
        id.shift();
    }
    if(id[id.length-1]==='.'){
        id.pop();
    }
    return id.join('');
}