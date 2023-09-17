function solution(players, callings) {
    const obj = {};
    
    players.forEach((player,index)=>{
        obj[player] = index;
    })
    
    callings.forEach((calling)=>{
        const playerName = calling;
        const playerIndex = obj[calling]
        const playerFrontIndex = playerIndex-1;
        const playerFrontName = players[playerFrontIndex]
        
        players[playerIndex] = playerFrontName
        players[playerFrontIndex] = playerName
        
        obj[playerName] = playerFrontIndex;
        obj[playerFrontName] = playerIndex;
    })

    return players;
}
