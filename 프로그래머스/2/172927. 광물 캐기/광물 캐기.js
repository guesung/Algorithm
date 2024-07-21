function solution(picks, minerals) {
    var answer = 0;
    
//     다이아, 철, 돌 각각 0~5개
    
//     pick : [dia,iron,stone] | minerals : 광물의 순서
//     1. 한 곡괭이를 들었으면 5개를 꼭 캐야 한다.
//     2. 그 후, 새로운 곡괭이로 교체해야 한다.
    
//     25 + 25 = 50
//     만약, 모든 minerals를 캐지 못하면, 거기서 끝낸다. (예외 케이스)
    
    // const pickCount = picks.reduce((prev,cur)=>prev+cur,0);
    
//     dia -> 무조건 dia, iron -> dia>iron, stone -> stone으로 캐는 것이 이득이다.
//     1. 5개씩 캘 것이기에, 5개씩 끊는다. 
//     1.1. dia, iron, stone이 몇 개씩 있는 지 구한다.
//     2. dia가 가장 많은 배열을 찾아 -> dia > iron > stone 곡괭이 순으로 있는 대로 캔다.
//     3. iron과 stone도 동일한 과정을 반복한다.
    function getCount(array,item){
        return array.filter(it => it===item).length
    }
    
    function getFatigue(pick,mineral){
        switch(pick){
            case 'diamond':
                return 1;
            case 'iron':
                if(mineral === 'diamond') return 5;
                return 1;
            case 'stone':
                if(mineral === 'diamond') return 25;
                if(mineral === 'iron') return 5;
                return 1;
        }
    }
    
    const mineralsPerFiveArray = [];
    const pickSum = picks.reduce((prev,cur)=>prev+cur,0);
    const slicedMinerals = minerals.slice(0,pickSum * 5)
    
    while(slicedMinerals.length>0) mineralsPerFiveArray.push(slicedMinerals.splice(0,5));
    
    const mineralsCountArray = [];
    for(const mineralsPerFive of mineralsPerFiveArray){
        mineralsCountArray.push({
            diamond:getCount(mineralsPerFive,'diamond'),
            iron:getCount(mineralsPerFive,'iron'),
            stone:getCount(mineralsPerFive,'stone'),
        })
    }
    
    mineralsCountArray.sort((a,b)=>b.diamond - a.diamond || b.iron - a.iron || b.stone - a.stone); // diamond, iron, stone 순으로 내림차순 정렬
    
    const pickArray = []; // 실제 pick 개수 (diamond, iron, stone 순)
    const pickType = ['diamond','iron','stone']
    picks.forEach((pick,index)=>{
        for(let i=0;i<pick;i++){
            pickArray.push(pickType[index]);
        }
    });
    
    const sum = mineralsCountArray.reduce((prev,curreuntMineral,index)=> {
        const currentPick = pickArray[index];
        if(!currentPick) return prev;
        
        const fatigueSum = getFatigue(currentPick,'diamond') * curreuntMineral.diamond + getFatigue(currentPick,'iron') * curreuntMineral.iron + getFatigue(currentPick,'stone') * curreuntMineral.stone
        
        return prev + fatigueSum;
    },0)
    
    return sum;
}
