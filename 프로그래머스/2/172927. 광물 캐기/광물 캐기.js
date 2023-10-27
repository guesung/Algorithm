const PICK_LIST = ['diamond', 'iron', 'stone'];
const getCountOfItem = (array,item) => array.filter(it => it === item).length
const MINERAL_RATIOS = {
  'diamond': {'diamond': 1, 'iron' : 1, 'stone' : 1},
  'iron': {'diamond': 5, 'iron': 1, 'stone': 1},
  'stone': {'diamond': 25, 'iron': 5, 'stone': 1}
};
const calculatePickMineral = (pick, mineral, count) => {
  return MINERAL_RATIOS[pick][mineral] * count;
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
            diamond:getCountOfItem(minerals,'diamond'),
            iron:getCountOfItem(minerals,'iron'),
            stone:getCountOfItem(minerals,'stone'),
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
            const currentPick = PICK_LIST[i];
            pickStore.push(currentPick)
        }
    }
    const pickStore2 = PICK_LIST.flatMap((pick, index) => {
        if(picks[index]>0)Array(picks[index]).fill(pick)})
                                         
                                        
        

    console.log(pickStore2)
                                     
    const fatigueSum = sortedMinerals.reduce((prevSum,currentMinerals,index) => {
        const currentPick = pickStore[index];
        const {diamond:currentDiamondCount,iron:currentIronCount,stone:currentStoneCount} = currentMinerals 
        return prevSum + calculatePickMineral(currentPick,'diamond',currentDiamondCount) + calculatePickMineral(currentPick,'iron',currentIronCount) + calculatePickMineral(currentPick,'stone',currentStoneCount)
    },0)
    
    return fatigueSum;
}