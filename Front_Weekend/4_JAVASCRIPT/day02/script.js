let a = 5;
let b = 5;

console.log(a + b); //10

let a2 = "안녕";
let b2 = "하세요";

console.log(a2 + b2); // 안녕하세요

console.log((a2 += b2)); // 안녕하세요

console.log(++a); // 6 ---- a는 값잉 5에서 ++되어 6으로 재할당
console.log(++a); // 7

console.log(a++); //7 ---- 연산 후에 값을 더 하기 때문에 a(7)을 찍어주고
// 이 연산 다음부터는 값이 8로 재할당

console.log(a); //8
console.log(a2++); // NaN
