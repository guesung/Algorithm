function solution(users, emoticons) {
    var answer = [];
    
//     10000 * 0.6 = 6000원
//     10000 * 0.75 = 7500원
//     목적 1. 플러스 서비스 가입자 최대
//     목적 2. 판매액 최대
//     emoticons의 최대 길이 = 7. 각각 할인 비율이 10/20/30/40 = 4가지
//     최대 경우의 수 = 4**7 = 16384
//     4**m * n
    
//     모든 경우의 수 탐색해서, 최대 플러스 가입자 최대 + 판매액 최대 구하기
    
    const DISCOUNT_RATE = [10,20,30,40];
    function getDiscountPrice (price,discountRate){
        return price * (1 - 0.01 * discountRate);
    }
    let maxEmoticonPlusUser = 0, maxEmoticonPrice = 0;
    function dfs (discountArray) {
        if(discountArray.length === emoticons.length){
            let emoticonPlusUser = 0, emoticonPrice = 0;
            for(const [minDiscount, emoticonPlusPrice] of users){
                let priceSum = 0;
                discountArray.forEach((discountRate,index)=> {
                    if(discountRate >= minDiscount){
                        const emoticonPrice = emoticons[index]
                        priceSum += getDiscountPrice(emoticonPrice,discountRate);
                    }
                })
                if(priceSum>=emoticonPlusPrice) emoticonPlusUser++;
                else emoticonPrice += priceSum
            }
            if(emoticonPlusUser>maxEmoticonPlusUser){
                maxEmoticonPlusUser = emoticonPlusUser;
                maxEmoticonPrice = emoticonPrice;
            }else if(emoticonPlusUser===maxEmoticonPlusUser){
                maxEmoticonPrice = Math.max(maxEmoticonPrice,emoticonPrice)
            }
            return;
        }
        for(const discount of DISCOUNT_RATE){
            dfs([...discountArray,discount])
        }
    }
    
    
    dfs([]);
    
    return [maxEmoticonPlusUser,maxEmoticonPrice];
}