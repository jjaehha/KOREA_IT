const arr = [];
arr[1] = "1";
arr[3] = 3;
console.log(arr.length); //4
// <empty>, "1", <empty>, 3

const arr2 = ["김재하", "김철수", "김영희"];

// if (arr2.indexOf("멍청이") >= 0) {
//   arr.push("홍길동");
// }
console.log(arr2); // 김재하 김철수 김영희 홍길동

// split
// 문자열은(문자로 이루어진배열) 유사배열로서 문자들의 배열이 되고 배열과 관련된 기능들을 사용할 수 있다
const phone = "010-1234-4321";
console.log(phone.length); // 13
// phone.replaceAll("-", ""); // 01012344321
phone
  .split("-") //['010', '1234', '4321']
  //   .join(""); // 01012344321
  .join("ㅎ"); // 010ㅎ1234ㅎ4321

// 내장함수

//push
const arr3 = [1, 2];
arr3.push(4, 5); // => [1, 2, 4, 5]

// concat
// 특정 배열에 인자로 들어온 배열을 합칠 때 사용한다 ex) 인ㅇ피니트 스크롤링
const arr4 = [1, 2];
const arr5 = [3, 4];

const result = arr4.concat(arr5); // [1, 2, 3, 4]

//pop
const arr6 = [1, 2, 3, 4, 5];
const deleteE1 = arr6.pop();
console.log(deleteE1, arr6); // [5], [1, 2, 3, 4]

// shift, unshift
const arr7 = [1, 2, 3, 4];
arr7.unshift(5);
console.log(arr7); // [5, 1, 2, 3, 4]
arr7.shift();
console.log(arr7); // [1, 2, 3, 4]

// slice(start, end)
// start번째 인덱스부터 시작하여 end "직전"까지의 인덱스 요소만을 복사하여 변환

const apart = ["재하", "철수", "짱구", "훈이", "유리", "맹구", "영희"];
console.log(apart.slice(1, 4)); // ["철수", "짱구", "훈이"]
// 끝까지 가지고 올때
console.log(apart.slice(1));
// 빈배열
console.log(apart.slice(1, 1));
console.log(apart.slice(-4, -1));
// slice에서 마지막 index는 -1부터 표기하여 -2, -3, -4로 으무 형태로 감소하는 형식

// splice(start, deletdCount, item)
// item은 생략 가능하며 splice의 주 용도는 내가 원하는 요소를 삭제하기 위함
const deleteArr = apart.splice(1, 4, ["김재하", "김철수", "신짱구"]); // 1번 부터 4개
console.log("apart[1]", apart[1][1]); // 김철수
// console.log(deleteArr, apart);
