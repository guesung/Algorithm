function solution(sequence, k) {
    let startIdx = sequence.length - 1;
    let endIdx = sequence.length - 1;
    let sum = sequence[endIdx];

    while (true) {
        if (sum < k) {
            startIdx--;
            sum += sequence[startIdx];
        } else if (sum > k) {
            sum -= sequence[endIdx];
            endIdx--;
        } else if (startIdx > 0 && sequence[startIdx - 1] == sequence[endIdx]) {
            startIdx--;
            endIdx--;
        } else {
            break;
        }
    }

    return [startIdx, endIdx];
}