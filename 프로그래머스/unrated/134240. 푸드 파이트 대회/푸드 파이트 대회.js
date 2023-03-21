function solution(food) {
    var str = '';
    
    food=food.map((it)=>Math.floor(it/2));
    for(let i=1;i<=food.length;i++){
        for(let j=0;j<food[i];j++){
            str+=i;
        }
    }
    str+=0;
    for(let i=food.length;i>0;i--){
        for(let j=0;j<food[i];j++){
            str+=i;
        }
    }
    return str;
}