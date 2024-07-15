function solution(phone_book) {
    const map = new Map();
    phone_book.sort();
    for(const phone of phone_book){
        for(let i = 0;i<phone.length;i++){
            const it = phone.slice(0,i+1); // 첫 번째 요소만부터 ~ 마지막 문자까지 자른다.
            if(map.has(it)) return false;
        }
        map.set(phone,true);
    }
    return true;
}