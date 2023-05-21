const rates = {
    0.9:10,
    0.8:20,
    0.7:30,
    0.6:40,
}

function solution(users, emoticons) {
    const arr = [];
    let [maxUser,maxPrice] = [0,0];
     
    
    const dfs = () => {
        if(arr.length===emoticons.length){
            let [sumPrice,sumUser]=[0,0]
            users.forEach(user=>{
                let [minPercent, maxPrice] = user;
                let sum = arr.reduce((prev,cur,i)=>rates[cur]>=minPercent ? prev+cur*emoticons[i] : prev,0)
                sum>=maxPrice?sumUser++:sumPrice+=sum
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
}