
let a, b, rest;

[a,b] = [10, 20];
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

// 객체 구조 분해
const o = {p:42, q:true};