function solution(s) {
//     모든 단어의 첫 문자가 대문자, 그 외는 소문자
    // 첫 문자가 알파벳이 아닐 때는 이어지는 알파벳은 소문자
//     단어의 기준은 공백이다. ' '을 기준으로 split한다.
//     첫 문자만 대문자로 바꾸어 리턴한다.
//     공백이 여러 개 올 수 있다.
//     abc     dfe => Abc     dfe
//     split()으로는 어려울 듯하다. -> 정규표현식? X. 몇 개인지 저장해야 한다. 어렵다. 순히를 해야한다.
    let answer = '';
    for(let i=0;i<s.length;i++){
        if(i===0 || s[i-1] === ' ') answer += s[i].toUpperCase();
        else if(s[i] === ' ') answer += ' '
        else answer += s[i].toLowerCase()
    }
    
    
    // return s
    //     .split(/\s+/)
    //     .map(it=>it[0]
    //          .toUpperCase()+it?.slice(1)
    //          .toLowerCase())
    //     .join(' ')
    
    
    
    return answer;
}
