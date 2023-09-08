console.log(10 > 15);
console.log(10 > "a");
// 오류는 나지 않지만 문자열의 크기는 비교를 자제
// 같은지 비교할때 제외하고

console.log(10 == "10");
console.log(10 === "10");

console.log(10 != "10");
console.log(10 !== "10");

// 참조타입의 비교(객체, 배열, ...) 서로같읁지
let ar1 = [10, 20, 30];
let ar2 = [10, 20, 30];
console.log(ar1 === ar2);

let ar3 = ar1;
console.log(ar1 === ar3);

var num1 = 2;
var num2 = 2;
var num3 = 2;
var nu33 = 2;
var num4 = 2;
console.log(ar1 === ar3);
