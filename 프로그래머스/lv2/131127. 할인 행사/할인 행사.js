function solution(want, number, discount) {
    let toggle ;
    let cnt = 0;
    for(let i=0;i<=discount.length-10;i++){
        let tmp_arr = discount.slice(i,i+10);
        toggle = false;
        want.forEach((it,i)=>{
            // console.log(tmp_arr.filter(item=>item===it))
            if((tmp_arr.filter(item=>item===it)).length<number[i]){
                toggle=true;
                return;
            }
        })
        if(!toggle) cnt+=1;
    }
    return cnt;
}
