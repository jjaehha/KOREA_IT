// a 조건을 만족한다면 console.log('a조건 만족함!'); 코드가 실행 되어야 하낟

let number = Number(prompt("정수를 입력하시오"));

// if (number === 0) {
//   alert("0입니다");
// } else if (number % 2 === 1) {
//   alert("홀수");
// } else if (number % 2 === 0) {
//   alert("짝수");
// } else {
//   alert("숫자를 입력하세요");
// }

// 사용자가 입력한 number가 윤년 이라면 윤년 alert
// 평년이라면 평년 alert 뜨우기
// 윤년이란? 2dnjfdl 29일까지 있는ㄴ 년도
// 년도가 4의 배수 o 100의  배수 o

if (number % 400 === 0) {
  alert("윤년입니다");
} else if (number % 100 === 0) {
  alert("평년");
} else if (number % 4 === 0) {
  alert("윤년입니다");
} else {
  alert("평년");
}

if ((!(number % 4) && number % 100) || !(number % 400)) {
  alert("윤년입니다");
} else {
  alert("평년입니다");
}
