function solution(record) {
    var result = [];
//     닉네임 바ㅏ꾸는 법 ;  Change ~ / Enter ~
    const name = {};
    record.forEach(it=>{
        it = it.split(' ')
        if(it[0]==='Enter'){
            result.push([it[1],'님이 들어왔습니다.'])
            name[it[1]]=it[2]
        }else if (it[0]==='Leave'){
            result.push([it[1],'님이 나갔습니다.'])
        }else if(it[0]==='Change'){
            name[it[1]]=it[2]
        }
    })
    result=result.map(it=>{
        it[0]=name[it[0]];
        return it.join('')
        
    })
    
    return result;
}