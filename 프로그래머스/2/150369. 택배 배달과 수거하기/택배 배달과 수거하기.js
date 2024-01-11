function solution(cap, n, deliveries, pickups) {
    let sum = 0;
    
    while(deliveries.length || pickups.length){
        // 배열의 뒤에서부터 0인 값을 뺀다.
        deleteZero(deliveries)
        deleteZero(pickups)
        
        const maxDistance = Math.max(deliveries.length,pickups.length);
        sum += maxDistance * 2
        
        runDeliver(deliveries,cap)
        runDeliver(pickups,cap)
    }   
    return sum;
}

function deleteZero (array) {
    for(let i=array.length-1;i>=0;i--){
        if(array[i] === 0) array.pop();
        else break;
    }
}

function runDeliver (array,sum){
    for(let i=array.length-1;i>=0;i--){
        const minusValue = Math.min(sum,array[i]);
        array[i] -= minusValue;
        sum -= minusValue;
        if(sum === 0) break;
    }
}