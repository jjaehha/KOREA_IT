/* 빌트인 객체 */
/* 내장 객체
네이티브 객체 --> Object, Number, Array 객체 생성과 관련된 함수 객체와 메소드로 구성되어 있다
호스트 객체 --> window, Location, history, document (전역 객체)

==>

Array/prototype.division = function(){
    ...
}

---> 자바스크립트에서 정의하지 않아도 편의성을 위하여 자체적으로 만들어둔 내장 기능
---> 도운을 죽기 위해 만든 편리한 객체
ex)
    consol.log()
*/

/* 배열의 생성 */
// Array.from   *유사 배열객체
// 유사배열 객체: 객체이지만(Object) 배열과 관련된 속성값을 가지고 있는 객체 // 배열이 아님
let obj = {
  0: 1,
  1: 2,
  length: 2,
};
obj.length;
obj[0];

const arr = Array.from(obj);
console.log(arr);

// 콜백함수가 return하는 값을 요소로 삼는 배열 생성
const newArr = Array.from({ length: 5 }, (el, index, originArr) => {
  return index;
});
console.log(newArr);

// Array.of
const ofArr = Array.of(1, 2, 3); //[1, 2, 3]

// Array.fill
// fil (value, start, end)
// end 인덱스 직전까지의 값을 채움
const fillArr = Array(10).fill(0, 0, 9);
console.log(fillArr);

const fillArr2 = Array(10)
  .fill()
  .map((el, index) => {
    return index;
  });
console.log(fillArr2);

/* 배열검사 */

Array.isArray([]); // true
Array.isArray(new Array()); // true
Array.isArray({}); // false
Array.isArray({ length: 2 }); // false
Array.isArray("Array"); // false
