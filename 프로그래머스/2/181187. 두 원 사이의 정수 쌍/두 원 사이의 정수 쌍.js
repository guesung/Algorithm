function solution(r1, r2) {
    let diagonalSum = 0;
    for(let x=1;x<r2;x++){
        const minValue = x<r1 ? Math.ceil(Math.sqrt(r1 * r1 - x * x)) : 1
        const maxValue = Math.floor(Math.sqrt(Math.abs(r2 * r2 - x * x))); 
        diagonalSum += (maxValue - minValue + 1)
    }
    const axiosSum = r2 - r1 + 1
    return (diagonalSum + axiosSum)*4;
}