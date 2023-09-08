let jaeha = {
  name: "김재하",
  age: 21,
  height: 180,
};

/*
일방 객체는 이터러블한(순회 가능한) 객체? // 아닙니다

순회 가능함을 판단하는 것을 이터레이터라는 속성 값이
객체에 존재해야만 순회가능

따라서 일반 객체는 이터레이터가 존재하지 않기 때문에 for of와 for Each그리고 for문은 사용이 불가능

이터러블하지 않은 객체를 반복하기 위해
자바스크립트가 for문을 하나 만들어 냅니다 (for in)
*/

for (const key in jaeha) {
  console.log(jaeha[key]);
}

// 순회 가능한 객체에서 사용할 수 있는 반복문
// 순회 가능한 객체 (Array, Map, set, Collection ...)

const arr = [1, 2, 3, 4, 5];

// 반드시 모든 요소를 순회해야하며, * index가 필요할 때
arr.forEach((el, index, originArr) => {
  console.log(el);
});

// for of
// 반드시 모든 요소들 순회 해야하며, 요소의 값에만 접근 가능
for (const el of arr) {
  console.log(el);
}

// for
// 조건식, 증감식 -- 내 마음대로 설정
for (let i = 0; i < Math.floor(arr.length / 2); i++) {}
