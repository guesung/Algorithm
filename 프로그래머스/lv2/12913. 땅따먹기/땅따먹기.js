function solution(land) {
    var answer = 0;
    const arr = land.map(v=>v.slice())
    
    
    // arr[1][2]=5;
    // console.log(arr)
    
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<4;j++){
            for(let k=0;k<4;k++){
                if(j===k) continue;
//                 land배열은 왜변하는거지 .. 대체 왜??
                arr[i][j]=Math.max(arr[i][j],arr[i-1][k]+land[i][j]);
            }
        }
    }
    return Math.max(...arr[arr.length-1])
    

    return answer;
}