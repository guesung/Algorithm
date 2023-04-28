function solution(users, emoticons) {
    var answer = [];
//     1. 가입자를 최대로
//     2. 이모티콘 판매액을 최대로
    
    const rates = {
        0.9:10,
        0.8:20,
        0.7:30,
        0.6:40,
    }
    
//     1. emoticons의 각 요소에 0.9/0.8/0.7/0.6 중 하나를 곱한다
//     2. users를 순회하며 users[0]가 할인율 이상인 값만 더함 -> 더한 값이 users[1]이상이라면 플러스 구매자. 아니라면 이모티콘 구매자
//     emotioncs최대 길이 = 7. 시간복잡도 O(4^m^n)(m최대 7, n최대 100) -> 노가다 할 경우 최대 160만
    
    const l = emoticons.length
    const arr = [];
    let maxUser = 0;
    let maxPrice = 0;
    const dfs = () => {
        if(arr.length===l){
            let [sumPrice,sumUser]=[0,0]
            users.forEach(user=>{
                let [minPercent, maxPrice] = user;
                let sum = 0;
                arr.forEach((it,i)=>{
                    if(rates[it]>=minPercent){
                        sum+=it*emoticons[i]
                    }
                })
                if(sum>=maxPrice) sumUser++;
                else sumPrice+=sum;
            })            
            if(maxUser<sumUser) {
                maxUser=sumUser
                maxPrice=sumPrice
            }else if(maxUser===sumUser && maxPrice<sumPrice){
                maxPrice=sumPrice
            }
            return;
        }
        Object.keys(rates).forEach(rate=>{
            arr.push(rate)
            dfs()
            arr.pop()
        })
    }
    dfs()
    return[maxUser,maxPrice]
    
    // emoticons.forEach(emoticon=>{
    //     sum = 0;
    //     Object.keys(rates).forEach(rate=>{
    //         sum+=emoticon*rate
    //     })
    //     console.log(sum)
    // })
    
    
    
    return answer;
}