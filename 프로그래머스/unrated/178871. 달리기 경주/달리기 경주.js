function solution(players, callings) {
    const playerIndices = {}; // 이름을 키로, 인덱스를 값으로 가지는 객체

    players.forEach((player, index) => {
        playerIndices[player] = index;
    });

    callings.forEach(calling => {
        const playerIndex = playerIndices[calling];
        if (playerIndex > 0) { // 첫번째 원소가 아니라면 스왑 수행
            const playerFrontIndex = playerIndex - 1;
            const playerFrontName = players[playerFrontIndex];

            // 인덱스 업데이트
            playerIndices[calling] = playerFrontIndex;
            playerIndices[playerFrontName] = playerIndex;

            // players 배열의 원소 스왑
            players[playerIndex] = playerFrontName;
            players[playerFrontIndex] = calling;
        }
    });

    return players;
}
