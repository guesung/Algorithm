const pickList = ['diamond','iron','stone']
const getCount = (array,item) => array.filter(it => it === item).length
const calculatePickMineral = (pick,mineral)=>{
    if(pick==='diamond'){
        return 1;
    }
    if(pick==='iron'){
        if(mineral === 'diamond') return 5;
        return 1;
    }
    if(pick==='stone'){
        if(mineral === 'diamond') return 25;
        if(mineral === 'iron') return 5;
        return 1;
    }
}
function solution(picks, minerals) {
    var answer = 0;
    
//     현재 곡괭이로 최대로 캘 수 있는 광물 = 5 * 곡괭이 수
    const maxMineralCount = picks.reduce((prev,cur) => prev + cur,0) * 5
    const validMinerals = minerals.slice(0,maxMineralCount)

//     0. 5개씩 묶기 (한 번 곡괘이를 잡으면 5개씩 캐야 함)
    const dividedMinerals = [];
    for(let i=0;i<validMinerals.length;i+=5){
        dividedMinerals.push(validMinerals.slice(i,i+5))
    }
    
//     1. diamond,iron,stone 별로 개수 세기
    const countMinerals = dividedMinerals.map(minerals => {
        return {
            diamond:getCount(minerals,'diamond'),
            iron:getCount(minerals,'iron'),
            stone:getCount(minerals,'stone'),
        }        
    })
//     2. diamond,iron,stone 순으로 정렬
    const sortedMinerals = countMinerals.sort((a,b)=>{
        if(a.diamond === b.diamond){
            if(a.iron === b.iron){
                return b.stone - a.stone
            }
            return b.iron - a.iron
        }
        return b.diamond - a.diamond
    })
//     3. picks에서 앞에서부터 가진 곡괭이로 캐기
    const pickStore = [];
    for(let i=0;i<3;i++){
        while(picks[i]--){
            const currentPick = pickList[i];
            pickStore.push(currentPick)
        }
    }
    let sum = 0;    
    for(let index=0;index<sortedMinerals.length;index++){
        const currentPick = pickStore[index];
        const currentMinerals = sortedMinerals[index];
        
        const {diamond:currentDiamondCount,iron:currentIronCount,stone:currentStoneCount} = currentMinerals 
        for(let i=0;i<currentDiamondCount;i++){
            sum += calculatePickMineral(currentPick,'diamond');            
        }
        for(let i=0;i<currentIronCount;i++){
            sum += calculatePickMineral(currentPick,'iron');            
        }
        for(let i=0;i<currentStoneCount;i++){
            sum += calculatePickMineral(currentPick,'stone');            
        }
    }
    return sum;
}