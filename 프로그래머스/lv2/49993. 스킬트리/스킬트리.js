function solution(skill, skill_trees) {
    let sum = 0;
    skill_trees.forEach((item)=>{
        let index = 0;
        let toggle = true;
        item.split('').forEach((it,i)=>{
            if(skill.includes(it)){
                if(index === skill.indexOf(it)){
                    index+=1
                }else{
                    toggle = false
                     return;
                 }
            }
            
            if(i===item.length-1 && toggle)
                sum+=1
            
        })
    })
    
    return sum;
}