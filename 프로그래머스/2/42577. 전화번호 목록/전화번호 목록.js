function solution(phone_book) {
    var answer = true;
    
//     한 번호가 다른 번호의 접두어인 경우가 있는가
//     접두사 : 맨 앞의 문자들이 동일한가
//     접두어인 경우가 있으면 false, 없다면 true
//     N은 최대 100만이기에, O(N^2)일 경우 시간 초과에 걸린다. O(N)으로 코드를 작성해야 한다.
//     직관적으로 풀 경우, 원소를 하나씩 탐색하며 다른 원소에 본인이 접두사인 지 체크하는 것이다. 이 경우, O(N^2)의 시간복잡도를 가지게 된다.
//     각 원소를 순회한다. 한 문자씩 있는 지 체크한다.
//     최대 O(N * 20)이므로, O(N)이다. 이 방법이 가능한 이유는 해시의 탐색 시간복잡도가 1이기 때문이다.
    
//     어떤 예외사항이 존재할 수 있을까.
    const map = new Map();
    for(const phone of phone_book){
        for(let i = 0;i<phone.length;i++){
            const it = phone.slice(0,i+1); // 첫 번째 요소만부터 ~ 마지막 문자까지 자른다.
            if(map.has(it)) return false;
        }
        map.set(phone,true);
    }
//     위와같이 할 경우, 앞의 문자가 뒤의 문자의 접두사인 경우 밖에 구하지 못하낟
    const map2 = new Map();
    phone_book.reverse();
    for(const phone of phone_book){
        for(let i = 0;i<phone.length;i++){
            const it = phone.slice(0,i+1); 
            if(map2.has(it)) return false;
        }
        map2.set(phone,true);
    }
    return true;
}