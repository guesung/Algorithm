function solution(r1, r2) {
    var answer = 0;

    let diagonalSum = 0;
    for(let x=1;x<r2;x++){
        let minValue;
        if(x>=r1) minValue = 1;
        else minValue = Math.ceil(Math.sqrt(r1 * r1 - x * x));
        
        const maxValue = Math.floor(Math.sqrt(Math.abs(r2 * r2 - x * x)));
        
        if(minValue === 0) diagonalSum += (maxValue - minValue)
        else diagonalSum += (maxValue - minValue + 1)
    }
    const axiosSum = r2 - r1 + 1
    return (diagonalSum + axiosSum)*4;
}