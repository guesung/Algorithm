function solution(expression) {
    var answer = 0;
    
    const calculateIt = (a,b,expression) => {
        [a,b] = [+a,+b]
        if(expression==='*') return a*b;
        if(expression==='+') return a+b;
        if(expression==='-') return a-b;
    }
    
    const calculateEach = (numArr,exArr,calculateNow) => {
        let thisPos = exArr.indexOf(calculateNow);
        while(thisPos!==-1){
            const result = calculateIt(numArr[thisPos],numArr[thisPos+1],calculateNow)
            exArr.splice(thisPos,1);
            numArr.splice(thisPos,2,result);
            thisPos = exArr.indexOf(calculateNow);
        }
        return numArr[0]
    }
    
    
    
    const express = ['+','-','*']
    const calculate = (numArr,exArr, item) => {
        item.forEach(it=>{
            expression = calculateEach(numArr,exArr, express[it])
        })
        return expression
    }
    
    const cases = [
        [0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]
    ]
    
    const numArr = expression.split(/[*+-]/g);
    const exArr = expression.split('').filter(it=>isNaN(it))
    
    cases.forEach(item=>{
        const numArrDup = [...numArr];
        const exArrDup = [...exArr]
        const result = calculate(numArrDup,exArrDup,item)
        answer = Math.max(answer,result>0?result:(-1)*result)
    })
    
    return answer;
}