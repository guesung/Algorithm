function solution(brown, yellow) {
    var answer = [];
    
//     brown : 카펫에서 갈색 격자의 수
//     yellow : 노란색 격자의 수
    
//     리턴값 : [카펫의 가로 크기, 카펫의 세로 크기]
//     카펫의 가로 길이 >= 세로 길이
    
//     1. brown + yellow = 결과 값의 곱
//     2. 노란색 격자 수 >= 1이기 때문에, 세로 >= 3이다.
    
//     1. (3이상의) 약수를 구한다.
//     2. 각 약수를 순회하며, 개수가 맞는 지 체크한다.
    
    const sum = brown + yellow;
    for(let height=3;height*height<=sum;height++){
        if(sum % height === 0){
            const width = sum / height;
            console.log(width,height)
            if((width - 2) * (height - 2) === yellow) return [width,height]
        }
    }
    
    
    return answer;
}