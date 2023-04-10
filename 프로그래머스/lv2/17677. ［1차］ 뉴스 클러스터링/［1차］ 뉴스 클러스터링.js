function solution(str1, str2) {
    var answer = 0;
    str1=str1.toUpperCase();
    str2=str2.toUpperCase();
    const arr1=[];
    const arr2=[];
    const regex = /^[a-z|A-Z]+$/;
    for(let i=0;i<str1.length-1;i++){
        if(regex.test(str1.slice(i,i+2))){
            arr1.push(str1.slice(i,i+2));    
        }
    }
    for(let i=0;i<str2.length-1;i++){
        if(regex.test(str2.slice(i,i+2))){
            arr2.push(str2.slice(i,i+2));    
        }
        
    }
    
//     set사용불가(중복 허용)
//     하나씩 비교해야 함
//     합집합 = 각 배열의 원소의 합 - 교집합의 개수
    let cnt = 0;
    
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                cnt++;
                arr2[j]=null;
                break;
            }
        }
    }    
    // 교집합 = cnt, 합집합 = arr1.length+arr2.length-cnt
    if(arr1.length+arr2.length-cnt===0) return 65536;   
    else return Math.floor(cnt/(arr1.length+arr2.length-cnt)*65536)
}