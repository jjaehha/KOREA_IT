let book = {
  title: "대모험",
  page: 50,
  writer: "김철수",
  a: 1,
  b: 2,
  c: 3,
};

let { title, page, writer, ...etc } = book;
console.log(title, page, writer);
console.log(etc);

// 객체 구조분해할당 주의점
// 변수는 {}를 통해 묶어줘야 한다
// 변수의 순서는 상관 없고, 대신 객체 속의 key와 같은 이름의 변수여야 한다
// 없는 key를 변수로 쓰면 그 변수에는 undefined 대임

// 배열 구조분해 할당
let ar = [10, 20, 30, 40, 50];
const [num1, num2, num3, ...rest] = ar;
console.log(num1, num2, num3);
console.log(rest);
