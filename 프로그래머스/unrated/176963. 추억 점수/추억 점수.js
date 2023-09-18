function solution(name, yearning, photo) {
    var answer = [];
//     1. name과 yearning을 순회하며 key:value로 객체화
//     2. photo를 순회하며 해당 요소를 key값으로 검색하여 점수 합산
    const obj = {};
    name.forEach((it,index) => {
        obj[it] = yearning[index];
    })
    photo.forEach(item=>{
        let sum = 0;
        item.forEach(it=>{
            if(obj.hasOwnProperty(it)) sum += obj[it]
            
        })
        answer.push(sum);
    })
    
    return answer;
}