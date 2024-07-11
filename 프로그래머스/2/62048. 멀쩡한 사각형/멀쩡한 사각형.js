function solution(w, h) {
    let cnt = 0;
    for(let i=0;i<w;i++){
        const leftSideY = i * h / w;
        const rightSideY = (i+1) * h / w;
        cnt += (Math.ceil(rightSideY) - Math.floor(leftSideY))
    }
    return h * w - cnt;
}