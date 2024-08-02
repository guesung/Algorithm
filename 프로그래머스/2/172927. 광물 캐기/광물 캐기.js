function getCount(array,item){
    return array.filter(it=>it===item).length;
}
function usePick(pick,mineral){
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
function solution(picks, minerals) {
    var answer = 0;
    
//     인자
//     picks : 곡괭이의 개수
//     minerals : 광물들의 순서
    
//     리턴값 : 작업을 끝내는데필요한 최소한의 피로도
    
//     조건
//     1. 한 번 캐기 시작한 곡괘이는 끝까지 사용해야 한다.
//     2. 광물은 주어진 순서대로 캐야 한다.
//     3. 종료 조건 : 광물을 다 캐거나 / 더 사용할 곡괭이가 없거나
//     4. 각 곡괭이는 종류 상관없이 5개를 캘 수 있다.
    
//     1. 내가 최대로 캘 수 있는 광물의 수는, picks의 총합 * 5와 minerals의 개수 중 더 작은 수이다.
    const picksCnt = picks.reduce((prev,cur) => prev + cur,0)
    const maxMineralCnt = Math.min(5 * picksCnt, minerals.length);
    minerals = minerals.slice(0, maxMineralCnt);
    
//     2. 5개씩 묶는다. 하나의 곡괭이로 5개의 광물을 캘 수 있기 때문이다.
    const mineralsArray = [];
    for(let i=0;i<maxMineralCnt;i+=5){
        mineralsArray.push(minerals.slice(i,i+5))
    }
    
//     3. 각 배열에서 다이아몬드, 철, 돌 개수를 구한다.
    const mineralsCntArray = mineralsArray.map(minerals => {
        return { 
            diamond : getCount(minerals,'diamond'),
            iron : getCount(minerals,'iron'),
            stone : getCount(minerals,'stone')
        }
    })
//     4. 다이아몬드 > 철 > 돌 개수 순으로 내림차순 정렬한다.
    mineralsCntArray.sort((a,b) => 
        b.diamond - a.diamond ||
        b.iron - a.iron ||
        b.stone - a.stone
    )
    
//     5. picks배열을 더 보기 편하게 바꾼다.
    const pickArray = [];
    const pickType = ['diamond','iron','stone'];
    picks.forEach((pick,index) => {
        for(let i=0;i<pick;i++){
            pickArray.push(pickType[index]);
        }
        
    })
    
    // 6. 다이아몬드 > 철 > 돌 순서대로 곡괭이를 사용하며 캔다.
    let result = 0;
    mineralsCntArray.forEach((mineralCnt,index)=>{
        const currentPick = pickArray[index];
        result += usePick(currentPick,'diamond') * mineralCnt.diamond;
        result += usePick(currentPick,'iron') * mineralCnt.iron;
        result += usePick(currentPick,'stone') * mineralCnt.stone;
    })
    
    return result;
}