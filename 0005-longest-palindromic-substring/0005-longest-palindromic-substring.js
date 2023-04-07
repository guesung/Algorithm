/**
 * @param {string} s
 * @return {string}
 */

const isPlaindrome = (str) => {
    const l = str.length
    let result = true;
    for(let i=0;i<l/2;i++){
        if(str[i]!==str[l-1-i]) return false;
    }
    return true;
}

var longestPalindrome = function(s) {
    let maxPal = 1;
    let maxString = s[0];
    for(let i=2;i<=s.length;i++){ // i는 길이
        for(let j=0;j<s.length-i+1;j++){ // j는 시작 index
            if(isPlaindrome(s.substring(j,j+i))){
                maxPal=i;
                maxString=s.substring(j,j+i);
            }
        }
    }
    return maxString
};