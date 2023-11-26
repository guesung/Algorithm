const sum = (array) => {
    return array.reduce((cur,prev) => cur+prev,0);
}

const isEmpty = (array) => {
    return array.length === 0;
}

function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let currentTruckIndex = 0;
    let stack = [];
    while(currentTruckIndex < truck_weights.length || !isEmpty(stack)){
        time++;
        for(const it of [...stack].reverse()){
            it[1]++;
            if(it[1]>bridge_length) stack.shift();
        }
        stack = stack.map(truck => [truck[0], truck[1]++]).filter(truck=>truck[1]<=bridge_length)
        
        const sumOfStack = sum(stack.map(it=>it[0]));
        if(sumOfStack + truck_weights[currentTruckIndex] <= weight) {
            stack.push([truck_weights[currentTruckIndex],1])
            currentTruckIndex++
        }
    }
    return time;
}