// 구조분해 할당
// 배열 요소와 갯수보다 변수의 갯수가 적어도 가능(순서대로)
// 배열 요소의 갯수보다 변수의 갯수가 많아도 가능(undefined)
let ar = [10, 20, 30];
let [a, b, c] = ar;
console.log(a);
console.log(b);
console.log(c);

// 객체 구조 분해 할당
// 변수이름은 반드시 객체 속 key와 동일하게 선언
// 순서는 상관없으며 없는 key를 변수이름으로 사용하면 undefined
let book = {
  title: "책제목",
  price: 10000,
};

const { price, title, page } = book;
console.log(price);
console.log(title);
console.log(page);

let num1 = 10;
let num2 = num1;

let ar1 = [10, 20, 30];
let ar2 = ar1;
ar2[0] = 100;
console.log(ar1);

//
let ar3 = [10, 20, 30];
// ar3에 들어있는 요소들을 그대로 갖고 있는 ar4 배열을 만들고
// ar4 배열의 0번째방을 100으로 바꿨을 때
// ar3는 여전히 [10, 20, 30] 일때 성공!
let ar4 = ar3;
ar4[0] = 100;
// ar3[0] = 10;

ar4[0] = 10;

console.log(ar3);
