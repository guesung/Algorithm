function solution(board) {
    let O = 0; // 선공
    let X = 0; // 후공

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == 'O') O++;
            else if (board[i][j] == 'X') X++;
        }
    }

    if (O == 0 && X == 0) return 1;

    let total = O + X;
    if (total % 2 == 0) {
        if (O != X) return 0;
    } else if (O != X + 1) {
        return 0;
    }

    let complete = [];
    for (let w of board) {
        let [w1, w2, w3] = w;
        if ('.' != w1 && w1 == w2 && w2 == w3) complete.push(w1);
    }

    for (let j = 0; j < board[0].length; j++) {
        if (board[0][j] != '.' && board[0][j] == board[1][j] && board[1][j] == board[2][j]) complete.push(board[0][j]);
    }

    if ('.' != board[0][0] && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
        complete.push(board[0][0]);
    }

    if ('.' != board[0][2] && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
        complete.push(board[0][2]);
    }

    if (total == 9 && complete.length == 2 && complete[0] == complete[1]) {
        return 1;
    }

    if (complete.length > 1) return 0;

    if (complete[0] == 'O') {
        return O > X ? 1 : 0;
    }

    if (complete[0] == 'X') {
        return O == X ? 1 : 0;
    }

    return 1;
}