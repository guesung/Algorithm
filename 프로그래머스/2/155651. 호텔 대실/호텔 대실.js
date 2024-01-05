// 10분청소 후 다음 사용가능
// 필요한 최소객실수는?
// 분으로 변환
// 시작시각 오름차순
// 각 방마다 입실 가능한 시각을 저장하는 배열 (오름차순)

function solution(book_time) {
  var answer = 0;
  const bookArr = book_time
    .map((book) => {
      const convertToNum = book.map((b) => {
        const [h, m] = b.split(":");
        return Number(h) * 60 + Number(m);
      });
      return { start: convertToNum[0], end: convertToNum[1] };
    })
    .sort((a, b) => a.start - b.start);

  const canEnterTimes = [bookArr[0].end + 10]; // 각 방마다 입실가능한 시각
  answer++; // 첫번째방

  for (let i = 1; i < bookArr.length; ++i) {
    const { start, end } = bookArr[i];
    // 들어갈 수 있는 방이 없는 경우
    if (start < canEnterTimes[0]) {
      answer++; // 방추가
    }
    // 들어갈 수 있는 방이 있는 경우
    else {
      canEnterTimes.shift(); // 이미 퇴실한 방 제거
    }
    canEnterTimes.push(end + 10); // (새로운 방이나 기존 방에) 현재 입실하는 방의 다음 입실가능시각 추가
    canEnterTimes.sort((a, b) => a - b); // 가장 빠른 다음 입실시각 갱신
  }
  return answer;
}