const datePlus = (startDate,period) => {
//     월 +1
    let [year,month,date] = startDate.split('.').map(v=>+v);
    
    month+= +period;
    
    
    year += (parseInt(month/12));
    month = month % 12;
    
    date --;
    if(date===0){
        date=28;
        month--;
    }
    
    if(month===0){
        year--;
        month=12;
    }
    
    return {year,month,date};
}

const compareDate = (expiration,today) => {
    if(today.year>expiration.year) return 'expired';
    if(today.year===expiration.year && today.month>expiration.month) return 'expired';
    if(today.year===expiration.year && today.month===expiration.month && today.date>expiration.date) return 'expired';
    return 'notExpired'
    
}

function solution(today, terms, privacies) {
    var answer = [];
//     1. 유효기간 구하기
//     2. 유효기간 < today인지 구하기
    
    const timesType={};
    terms.forEach((term)=>{
        term = term.split(' ')
        timesType[term[0]] = term[1]
    });
    
    const [year,month,date] = today.split('.').map(v=>+v)
    today = {year,month,date}
    
    privacies = privacies.map((privacy,index)=>{
        const [startDate,type] = privacy.split(' ');
        const expiration = datePlus(startDate,timesType[type])
        if (compareDate(expiration,today)==='expired'){
            answer.push(index+1)
        }
    })
    
    return answer;
}