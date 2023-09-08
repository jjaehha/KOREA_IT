// 타입검사 (타입가드)

console.log(typeof "5");
// string

console.log(typeof 5);
// number

console.log(typeof undefined);
// undefined

console.log(typeof null);
// object
// 자바스크립트 초기 버전 상의 오류지만, 하위 호환성 때문에 수정되지 않았습니다

function a(number) {
  if (typeof number !== "number") return;

  /*
  .... 숫자가 아닌게 들어오면 에러가나는 문장
  */
}
