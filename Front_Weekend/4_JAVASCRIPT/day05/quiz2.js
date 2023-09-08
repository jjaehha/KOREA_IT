/*
010-1234-1234를 파라미터로 전달받아
010-****-1234로 피싱하는 함수를 정으이

input값
    010-1234-1234

output값
    010-****-1234

operates
    전화번호의 중간 값을 1234로 바꾸어야한다

keyword
    특정 집단(배열)의 특정 부분을 바꿀 수 있는 알고리즘

1. replace
2. splice
3. split

splice를 써서 내가 원하는 인덱스번호를 구하고 인덱스번호에서 번호에서
4개의 숫자를 삭제한뒤 ****로 대체한다
*/

function parsePhone(phone) {
  const newArr = Array.from(phone); //유사배열인 string을 배열로 변환
  newArr.splice(4, 4, "*", "*", "*", "*"); // 배열로 변환한 데이터에서 특정 부분을 제거 후 추가
  return newArr.join(""); // join 함수
}

console.log(parsePhone("010 - 1234 - 1234"));

function parsePhone2(phone) {
  const arr = phone.split("-");
  arr[1] = "****";
  return arr.join("-");
}

console.log(parsePhone2("010 - 1234 - 5678"));

// ** 정규표현식을 이용한 replace로 문자열 데이터 치환하기
