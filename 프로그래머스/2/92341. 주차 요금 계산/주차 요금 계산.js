function convertHourToMinute(time){
    const [hour,minute] = time.split(':').map(it=>+it);
    return hour * 60 + minute
}

function solution(fees, records) {
    var answer = [];
//     출차된 내역이 없다면, 23:59 출차로 간주
//     1. 시간:분 > 분으로 계산
    // 2. 주차한 시간(분) 계산
//     3. 기본 시간 이하 : 5000원 | 180분 초과 : 10분당 600원. 나뉘지 않으면 올림
    const [baseMinute,baseFee,perMinute,perFee] = fees;
//     baseMinute : 기본 시간(분)
//     baseFee : 기본 요금(원)
//     perMinute : 단위 시간(분)
//     perFee : 단위 요금(원)
//     perMinute(분) = perFee(원)
    
//     해시 테이블 이용 : key=차 번호, value=입차 시간
//     해시 테이블 2개 : 차량의 입장 시간을 기록하는 해시 테이블 -> 다음 출차를 하면 해당 값 제외, 차량의 누적 주차 시간을 기록하는 해시 테이블
//     
    const enterExitHashMap = {};
    const feeHashMap = {};
    records.forEach(record=>{
        const [time, carNumber, status] = record.split(' ');
        if(status === "IN") enterExitHashMap[carNumber] = convertHourToMinute(time)
        if(status === "OUT") {
            const enterMinute = enterExitHashMap[carNumber]; 
            const exitMinute = convertHourToMinute(time);
            const stayMinute = exitMinute - enterMinute;
            delete enterExitHashMap[carNumber];
            feeHashMap[carNumber] = feeHashMap[carNumber] ? feeHashMap[carNumber] + stayMinute : stayMinute
        }
        
    })
    Object.entries(enterExitHashMap).forEach(([carNumber,enterMinute])=>{
        const stayMinute = 23*60 + 59 - enterMinute; 
        feeHashMap[carNumber] = feeHashMap[carNumber] ? feeHashMap[carNumber] + stayMinute : stayMinute
    })
    return Object.entries(feeHashMap).sort((a,b) => a[0] - b[0]).map(([carNumber,stayMinute])=>{
        if(stayMinute <= baseMinute) return baseFee;
        else return Math.ceil((stayMinute - baseMinute) / perMinute) * perFee + baseFee;
    },[])
}