function solution(n, words) {
    var answer = [];
    
//    1->2->3->...->n->1
//     앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 한다.
//     중복 허용 X
//     한 글자인 단어는 인정 X
    
//     [탈락하는 사람의 번호,자신의 몇 번째 차례에서 탈락하는 지]
//     탈락의 조건
//     1. 앞 사람이 말한 단어 -> 단어를 배열에 저장하고, includes를 활용한다.
//     2. 앞 사람이 말한 단어의 마지막 문자로 말하지 않은 단어 -> 마지막 단어를 저장한다.
//     3. 한 글자 단어
//     탈락하는 사람이 없다면, [0,0]
//     인자 n : 사람 수, words : 말한 단어들
    for(let i=0;i<words.length;i++){
//         1. 이전 단어의 끝과 일치하지 않는다면
        if(i > 0 && words[i].at(0) !== words[i-1].at(-1)){
            return [(i+1)%n || n,Math.floor(i/n)+1]
        }
//         2. 이전과 중복되는 단어라면
        if(words.slice(0,i).includes(words[i])){
            return [(i+1)%n || n,Math.floor(i/n)+1]
        }
    }
    return [0,0]
}
