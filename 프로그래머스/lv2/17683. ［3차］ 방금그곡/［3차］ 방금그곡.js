function solution(m, musicinfos) {
    var answer = '';
    let maxTime = 0;
//     musicinfos를 순회
    const minusTime = (startTime,endTime)=>{
        const [startHour,startMinute] = startTime.split(':').map(v=>+v)
        const startMinutes = startHour*60 + startMinute;
        
        const [endHour,endMinute] = endTime.split(':').map(v=>+v)
        const endMinutes = endHour*60 + endMinute;
        
        return endMinutes-startMinutes;
    }
    musicinfos.forEach(musicinfo=>{
        const [startTime,endTime,title,info] = musicinfo.split(',');
        const infoArr = [];
//         1. info의 길이 구하기 -> 걍 length하면 안됨 (예외 : C#,D#,F#,G#,A#)
        for(let i=0;i<info.length;i++){
            if(i===info.length-1) {
                infoArr.push(info[i])
                continue;
            }
            
            if(info[i+1]==='#') {
                infoArr.push(info[i]+'#')
                i++;
            }else{
                infoArr.push(info[i])
            }
        }
        
//         2. 시간/info길이 만큼 반복
        const durationTime = minusTime(startTime,endTime)
        const dup = parseInt(durationTime/infoArr.length);
        const rest = durationTime%infoArr.length;
        let str = ''
        for(let i=0;i<dup;i++){
            str += info;
        }
        str += infoArr.slice(0,rest).join('')
        
        let index = str.indexOf(m);
        while(index!==-1){
            if(str[index+m.length]!=='#'){
                if(maxTime<durationTime){
                    answer=title
                    maxTime = durationTime
                }
                break;
            }else{
                index=str.indexOf(m,index+1)
            }
        }
    })
    if(answer==='') return "(None)"
    return answer;
}