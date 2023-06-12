const solution = (msg) => {
    const answer = []
    // 문자열 저장 객체
    const wordObject = {};
  	// 초기화 작업
    for (let i=0; i<26; i++) {
        const word = String.fromCharCode(65+i);
        wordObject[word] = i+1;
    };
  
    
    
    let idx = 0;
    while (idx < msg.length) {
        let nowWord = '';
      	// 새로운 문자열이 나타나지 않을 때까지 문자열 붙히기
        while (wordObject[nowWord + msg[idx]]) {
            nowWord += msg[idx]
            idx += 1;
            console.log(nowWord)
        }
        answer.push(wordObject[nowWord]);
      	// 새롭게 발견된 문자는 객체 길이의 +1 값이 value로 들어간다.
        const N = Object.keys(wordObject).length+1;	
      	// 새롭게 추가될 문자 저장
        wordObject[nowWord+msg[idx]] = N;
    }
    return answer
}