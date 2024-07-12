function solution(cacheSize, cities) {
//     도시 이름 검색 -> 해당 도시와 관련된 맛집 게시물을 DB에서 읽어주는 서비스
//     입력)
    // cacheSize : 캐시 크기,. cities : 도시 이름 배열
//     출력)
//     총 실행시간
    
//     캐시 교체 알고리즘 : Least Recently Used(최신 사용한 것)
//     LRU : 메모리에 남아 있는 캐시 중 가장 오래동안 사용되지 않은 캐시를 새로운 캐시로 교체"
//     Cache Hit : CPU 가 참조하고자 하는 메모리가 캐시에 존재하고 있을 경우
//      Cache Miss : CPU 가 참조하고자 하는 메모리가 캐시에 존재하지 않을 경우
//     1. 캐시크기까지는 캐시 배열에 들어갈 수 있다.
//     2. 가득 찼을 경우 & 이미 캐시된 것이라면 -> 가장 안쪽으로 들어간다. (오래된 캐시 된다)
//     3. 가득 찼을 경우 & 캐시되지 않은 것이라면 -> 가장 최근에 들어간 캐시를 제거하고 집어넣는다.
//     LRU 알고리즘의 핵심 : 오랫동안 교체되지 않은 캐시(배열에서 바깥에 있는)를 교체한다.
    
    if (cacheSize === 0) return cities.length * 5;
    
    let cnt = 0;
    let cache = []; // cache는 오래된(교체될) 요소가 안쪽에 있는 구조이다.
    cities = cities.map(city => city.toLowerCase());
    
    for(const city of cities){
        if(cache.includes(city)){ // 요소가 있다면, 해당 요소를 제거한다.
            // const index = cache.findIndex(it => it===city);
            const index = cache.indexOf(city)
            cache.splice(index,1);
            // console.log(cache,cnt,city);
            // cache = [...cache].filter(it=>it===!city);
            // console.log(cache,cnt,city);
            cnt++;
        }else{ // 요소가 없다면, 가장 안쪽 요소를 제거하고 바깥쪽에 넣는다.
            if (cache.length === cacheSize) {
                cache.shift();
            }
            cnt+=5;
        }
        cache.push(city);
    }
    return cnt;
}

