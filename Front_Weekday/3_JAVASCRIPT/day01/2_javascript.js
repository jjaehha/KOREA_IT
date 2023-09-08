// 자바스크립트 문법이 적용되는 공간

// 1. 위에서부터 아래로, 좌에서 우로 해석한다
// 2. 한 줄의 코드가 끝나면 ({ } 제외) ; 으로 끝을 알려준다
// 3. 한 줄에는 한줄의 코드를 쓰자(권장사항, 가독성을 위해서)
// 4. 코드가 길어지거나 복잡해지면 줄바꿈을 활용한다.

// consol.log(): 함수
console.log('안녕하세요')

// 함수가 여러개가 한 줄에 사용되면 가장 안쪽 함수부터 차례대로 해석
console.log(console.log('반가워요'))

// console.log 함수는 인자를 여러개 넘겨줄 수 있다
console.log('안녕', 12, true, undefined, null);

// typeof 연산자
console.log(typeof 10)
console.log(typeof '10')
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)

// 변수 선언하기
// var 선언
console.log('-----------------------------')
var num1; // 저장공간, 변수 선언

console.log(num1 = 10); // num1: 저장공간, 저장공가느 변수에 값을 최초로할당(저장)(초기화)
console.log(num1) // 저장된 값

num1 = '안녕하세요' // 변수에 값을 재할당
console.log(num1)

var num1;
num = 500;
console.log(num1)