function solution(phone_book) {
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