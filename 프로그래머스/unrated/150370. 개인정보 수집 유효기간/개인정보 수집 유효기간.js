const isOverdue = (today,validateDate) => {
    
     
    today=today.split('.').map(it=>+it);
    validateDate=validateDate.split('.').map(it=>+it);
    
    if(today[0]>validateDate[0]) return true;
    if(today[0]===validateDate[0] && today[1]>validateDate[1]) return true;
    if(today[0]===validateDate[0] && today[1]===validateDate[1] && today[2]>validateDate[2]) return true;
    return false;
    
//     1. 연도 비교
//     2. 월 비교
//     3. 일 비교
    
}

const monthPlus = (date,month) => {
    date = date.split('.').map(it=>+it);
    date[1]+=month    
  while (date[1] > 12) {
    date[0]++;
    date[1] -= 12;
  }
    // if(date[1]%12===0)date[1]=12;    
    
    if(date[2]===1){
        date[2]=28;
        if(date[1]===1){
            date[1]=12;
            date[0]--;
        }else{
            date[1]--;   
        }
    }else{
        date[2]--;    
    }
    
    return date.join('.');
}

function solution(today, terms, privacies) {
    // 1. 유효 날짜 구하기 = 수집 일자 + 유효 기간
//     2. 오늘 날짜가 유효 날짜 전 -> 파기 X, 후 -> 파기 O => 파기 O만 cnt ++;
    
    terms = terms.map(term=>term.split(' '));
    privacies = privacies.map(privacy=>privacy.split(' '));
    
    let arr = [];
    privacies.forEach((privacy,index)=>{
        const thisTerm = terms.find(term => term[0]===privacy[1]);
        const validateDate = monthPlus(privacy[0],+thisTerm[1]);
        
        if(isOverdue(today,validateDate)) arr.push(index+1);
        
    })
    
    return arr;
}