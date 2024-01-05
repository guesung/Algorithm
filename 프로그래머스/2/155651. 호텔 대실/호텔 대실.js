const formatTime = (time) => {
    const [hour,minute] = time.split(':').map(it => +it)
    return hour*60 + minute
}
const isBetween = ([startTime,endTime],nowTime) => startTime<nowTime && nowTime<=endTime
const plusTime = (nowTime, plusTime) => {
    const {hour,minute} = nowTime
    let afterPlusTimeMinute = minute + plusTime;
    if(afterPlusTimeMinute>60){
        afterPlusTimeMinute -= 60;
        hour ++;
    }
    return {hour,minute:afterPlusTimeMinute}
}
function solution(book_time) {
    var answer = 0;
//     방을 최소 몇개 사용할 수 있느냐
//     퇴실 후 10분간 청소해야 한다. 즉, 10분 더 소모한다.
//     1. 시간:분 > 분으로 단위 통일
//     2. 퇴실 시간 > 10분 plus하기
//     3. 
    const formattedBookTime = book_time.map(([startTime,endTime])=>[formatTime(startTime),formatTime(endTime)])
    const plusTenMinuteBookTime = formattedBookTime.map(time => [
        time[0], time[1] + 10
    ])
    plusTenMinuteBookTime.sort((a,b) => a[0]-b[0])
    console.log(plusTenMinuteBookTime)
    
//     배열을 순회하며, 현재 범위가 곂치는게 있는지 -> 없다면 해당 배열에 추가
//     오름차순 정렬
//     "문제의 핵심 : 동일 시간대에 몇개의 곂치는 시간이 있느냐"
    // 0부터 1440까지 순회하며, 현재 요소가 배열에 몇개 사이에 있는지 체크 -> 
    let maxCnt = 0;
    for(let i=0;i<1440;i++){ // 00:00부터 23:50까지
        const betweenTimeCnt = plusTenMinuteBookTime.filter(time => isBetween(time,i)).length;
        maxCnt = Math.max(maxCnt,betweenTimeCnt);
    }
    
    
    
    
    return maxCnt;
}