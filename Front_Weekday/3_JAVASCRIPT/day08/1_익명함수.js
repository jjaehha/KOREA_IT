// 일반적인 함수 생성 방법
function add(a, b) {
  console.log("add라는 함수가 실행되었습니다");
}

// 익명함수
// 1회성
(function () {
  console.log("익명함수실행됨!!!");
})();

// 전통적인 선언방식을 벗어나 익명함수 방식으로 함수를 정의
let add2 = function (a, b) {
  console.log("익명합수로 정의한 add함수 실행됨!");
  console.log(a, b);
};

add2(10, 20);
add2(10, 20);

console.log("=========================================");

// 남이 만들어놓은 함수라고 가정
function otherFunction(a, b) {
  a();
  console.log(b);
}

// otherFunction을 사용하려면 첫번째 인자로는 함수를 전달해야한다
// (callback 함수), 두번째 인자로는 any타입의 값

// let my1 = function () {
//   console.log("my1함수 실행됨");
// };

// let my2 = function () {
//   console.log("my2함수 실행됨");
// };

// otherFunction(my1, 10);

// otherFunction(my2, 50);

otherFunction(function () {
  console.log("my1함수 실행됨");
}, 50);

otherFunction(function () {
  console.log("my2함수 실행됨");
}, 10);

// 배열
let ar = [1, 2, 3, 4, 5];

// 배열 속에 들어있는 요소를 차례로 출력하기
for (let i = 0; i < ar.length; i++) {
  console.log(ar[i]);
}

console.log("==================================");

// foreach함수
// 인자는 1개, 인자의 탑은 함수를 넘겨줘야 한다
// 인자로 전달되는 콜백 함수 매개변수 3개가 필요하다(안쓸거면 안써도됨)
// 콜백하수의 첫번째 매개변수에는 배열 속 요소가 차례대로 대입되고
// 두번째 매개변수에는 해당 요소의 인덱스번호가 차례대로 대입되고
// 세번째 매개변수에는 해당 배열이 대입된다

ar.forEach(function (a, b, c) {
  console.log("a", a); // 값
  console.log("b", b); // index번호
  console.log("c", c); // 배열
});

ar.forEach((el) => console.log("el", el));
