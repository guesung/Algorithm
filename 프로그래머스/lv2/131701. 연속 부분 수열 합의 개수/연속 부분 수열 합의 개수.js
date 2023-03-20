function solution(elements) {
    var answer = 0;
    
//     길이 : 1,2,3,...elements.length까지 가능
//     Set을 이용한 중복처리 
//     연속되어야 함
//     dfs로 조합 만드는 방법이 생각이 안남 => 연속되는 수이기에, dfs필요 없을지도? 이중 for문으로 가능할지도 => 시간 초과걸리지 않을까 => 일단 해보자
//     최대 1000 * 1000 * 1000 = 10*9 = 10 0000 0000 = 10억
//     => 누적합 이용하기
    const set = new Set([...elements.slice()])
    const arr = elements.slice();
    
    for(let l=1;l<elements.length;l++){
        for(let i=0;i<elements.length;i++){
            arr[i] += elements[(i+l)%elements.length];
            set.add(arr[i]);
        }
    }
    
    return set.size;
}
