// ctrl+alt+n
// var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

// 가능한 마리수 ; 0~n마리까지
// 2*1의 칸을 볼 때, 빈 것, 왼쪽이 찬 것, 오른쪽이 찬 것 이렇게 3가지 경우가 있음
// 이전 케이스만 고려하면 되는 매우 간단한 문제

const n = +input[0];
const arr = Array.from(Array(n), () => new Array(3));
for (let j = 0; j < 3; j++) {
  arr[0][j] = 1;
}
for (let i = 1; i < n; i++) {
  arr[i][0] = (arr[i - 1][0] + arr[i - 1][1] + arr[i - 1][2]) % 9901;
  arr[i][1] = (arr[i - 1][0] + arr[i - 1][2]) % 9901;
  arr[i][2] = (arr[i - 1][0] + arr[i - 1][1]) % 9901;
}
console.log(arr[n - 1].reduce((prev, cur) => (prev + cur) % 9901));
