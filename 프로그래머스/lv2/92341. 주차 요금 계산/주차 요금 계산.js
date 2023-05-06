const  calculateTime = (inTime,outTime) => {
    inTime = inTime.split(':')
    outTime = outTime.split(':')
    
    
    let hour = +outTime[0]-(+inTime[0]);
    let minute = +outTime[1]-(+inTime[1]);
    
    return hour*60+minute
}

function solution(fees, records) {
    var answer = [];
    
    
//     1. 각 recods별 IN과 OUT으로 시간을 계산
    let q = [];
    let records_tmp;
    let map = new Map();
    
    records=records.map(it=>it.split(' '));
    
    records.forEach((record,i)=>{
        if(record[2]==='IN'){
            q.push(record);
        }else if(record[2]==='OUT'){
            let thisCar = record[1]
            let inTime = q.find(it=>it[1]===thisCar)[0];
            let outTime = record[0];
            let usedTime = calculateTime(inTime,outTime);
            
            if(map.has(thisCar)){
                map.set(thisCar,map.get(thisCar)+usedTime)
            }else{
                map.set(thisCar,usedTime);    
            }
            q=q.filter(it=>{return it[1]!==record[1]})
        }
    })
    
    if(q.length!=0){
        q.forEach((it)=>{
            let thisCar = it[1];
            let inTime = it[0];
            let outTime = "23:59";
            let usedTime = calculateTime(inTime,outTime);
            
            if(map.has(thisCar)){
                map.set(thisCar,map.get(thisCar)+usedTime)
            }else{
                map.set(thisCar,usedTime);    
            }
        })
    }
    for (let amount of map.values()) {
        console.log(amount); // 500, 350, 50
    }
    
    const arr = [...map]
    arr.sort((a,b)=>a[0]-b[0]);
    map=new Map(arr)
    
    map.forEach((time,carNumber)=>{
        if(+time<=fees[0]){
            answer.push(fees[1]);
        }else{
            let tmp = fees[1];
            tmp += Math.ceil((+time-fees[0])/fees[2])*fees[3]
            answer.push(tmp)
        }
    })
    
    
//     2. 시간 * 금액 .. 산술연산
    
    
    return answer;
}