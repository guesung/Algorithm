function solution(cacheSize, cities) {
  let result = 0;
  let cache = [];

  // 캐시 크기가 0일 경우 모든 처리가 cache miss이므로 cities의 길이 * 5가 총 실행시간
  if (cacheSize === 0) return cities.length * 5;

  // 대소문자 구분 없이 처리하기 위해 소문자로 변경
  cities = cities.map((city) => city.toLowerCase());

  // LRU 알고리즘 적용
  cities.forEach((city) => {
    const cacheIndex = cache.indexOf(city);
    if (cacheIndex === -1) {
      // cache 교체 필요
      if (cache.length === cacheSize) cache.shift();
      result += 5; // cache miss
    } else {
      // cache에서 해당 city 삭제
      cache.splice(cacheIndex, 1);
      result++; // cache hit
    }

    // cache에 최신으로 push
    cache.push(city);
  });

  return result;
}