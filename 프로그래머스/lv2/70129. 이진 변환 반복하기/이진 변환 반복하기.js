function solution(s) {
    let answer = [],
        cnt = 0,
        cnt0 = 0;
    while (true){
        if(s==='1') {
            break
        }
        cnt++;
        cnt0 += s.split('').filter((it)=>it==='0').length
        s = s.split('').filter((it)=>it==='1').length.toString(2)
    }
    return [cnt,cnt0]
}