for (let i = 0; i < 10; i++) {
  console.log(`현제 숫자는 ${i + 1}입니다`);
}

// 결과 값이 어떻게 나올까요
// 1~10

// 초기식 = 0;
// 아웃풋 = +1;
// 조건식 - 증감식 = 9;

// 초기식 + 아웃풋 ~ 조건식-증감식+아웃풋
// 0+1 ~ 10-1+1

// 중첩 for 문
// 반복문 안에 반복문

for (let j = 0; j < 6; j++) {
  for (let i = 0; i < 9; i++) {
    console.log(`${j + 1}학년 ${i + 1}반`);
  }
}