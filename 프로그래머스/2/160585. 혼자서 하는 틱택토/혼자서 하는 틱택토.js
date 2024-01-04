const whoIsWinner = (a,b,c) => (a===b && b===c && a!=='.') ? a : 0;

function solution(board) {
    var answer = -1;
//     핵심 : 이 게임판이 규칙을 지켜서 진행한 틱택토에서 나올 수 있는 상황인가
//     조건 1. 선공 : O, 후공 : X
//     O>X>O...
//     조건 2. 게임 종료의 조건 : 가로/세로/대각선으로 3개가 같은 표시를 만들면 종료
    
//     조건 1을 만족하기 위해서는, O의 개수 >= X의 개수여야 한다.(1/0,1/1.. 가능 | 1/2,1/3..은 불가능)
    board = board.map(it=>it.split(''));
    let OCnt = 0, XCnt = 0;
    board.forEach(column => {
        column.forEach(it => {
            if(it === 'O') OCnt ++;
            if(it === 'X') XCnt ++;    
        })
    })
    if(!(OCnt === XCnt || OCnt === XCnt + 1)) return 0;
    
//     조건 2를 만족하기 위해서는, 3개가 같은 표시를 했는지 체크해야 한다. 3개 같은 표시한 게 1개면 그건 성립이 가능하다. 하지만 2개 이상은 불가능하다. 
//     X가 이겼다면, X의 개수 = Y개수여야 한다.
//     O가 이겼다면, O의 개수 = X개수 + 1이어야 한다.
    let winnerList = [];
    for (let i=0;i<3;i++){        
        winnerList.push(whoIsWinner(board[i][0],board[i][1],board[i][2]))
        winnerList.push(whoIsWinner(board[0][i],board[1][i],board[2][i]))
    }
    winnerList.push(whoIsWinner(board[0][0],board[1][1],board[2][2]))
    winnerList.push(whoIsWinner(board[2][0],board[1][1],board[0][2]))
    const OWinnerCnt = winnerList.filter(it => it === 'O').length;
    const XWinnerCnt = winnerList.filter(it => it === 'X').length;
    if(OWinnerCnt > 0 && XWinnerCnt > 0) return 0;
    if(OWinnerCnt > 0) return OCnt === XCnt + 1 ? 1 : 0
    if(XWinnerCnt > 0) return OCnt === XCnt ? 1 : 0
//     예외조건 : 마지막에 두 개의 대각선 혹은 개수가 만들어질 수 있다.
//     한 사람이 두 개의 
    return 1;
}