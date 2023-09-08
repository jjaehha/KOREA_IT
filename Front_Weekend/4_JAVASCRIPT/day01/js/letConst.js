console.log(a); // undefined
var a = 5;
console.log(a); // 5

//console.log(b); // Cannot access 'b' before initialization
let b = 5;
console.log(b); // 5
b = 6;
console.log(b); // 6

// const a = 5;
// 'a' has already been declared

const c = 7;
// c = 8;
// Assignment to constant variable

/*
문자열 내에서 변수를 사용하는 방법

" ", ' ', ` `
*/
console.log("a의값은" + a + "a입니다"); // +
console.log("a의값은", a, "a입니다"); // ,
console.log(`a의값은 ${a} a입니다`); // ${}, ` `(백쿼트)
