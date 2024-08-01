const isMatch = (word1,word2) => word1.split('').every((_,index) => (word1[index] === word2[index]  || word2[index] === '*')) && word1.length === word2.length;



const isAllMatch = (arr1,arr2) => arr1.every((_,index) => isMatch(arr1[index],arr2[index]));

function solution(user_id, banned_id) {
    const result = [];
    function dfs(arr){
        if(arr.length === banned_id.length){
            if(isAllMatch(arr,banned_id)) result.push(arr)
            return;
        }
        for(const user of user_id){
            if(arr.includes(user)) continue;
            dfs([...arr,user]);
        }
    }
    dfs([]);
    return new Set(result.map(it => it.sort().join(','))).size
}