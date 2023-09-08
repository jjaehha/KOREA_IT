const user = [
  {
    id: 1,
    name: "김재하",
  },
  {
    id: 2,
    name: "김철수",
  },
  {
    id: 3,
    name: "신짱구",
  },
];

// 기존 배열을 조작한 후 새로운 배열을 반환
// map 함수의 파라미터는 반드시 순서를 지켜야합니다 (요소, 인덱스, 원본배열)

/*
 return을 생각하기 위해서는 {}문과 return을 생략하면 됩니다
 그러나 객체의 경우 {}문을 생략할 수가 없음
 ({}), 괄호로 감싸면 return 생략 가능
*/

// 보통은 return 생략을 많이 사용하지만 추가적인 js 로직이 필요로 할때는 return을 생략하지 않는다
const newUsers = user.map((users, index) => {
  return {
    ...users,
    // id: user.id,
    // name: user.name,
    nick: `떡입마을 방법대${index + 1}`,
  };
});

const filterUsers = user.filter((user) => user.id !== 3);
console.log(filterUsers);

const userIndex = user.findIndex((user) => user.id === 1);
// -1

// reduce
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 누적값, 현재요소. 인덱스, 원본배열
let result = numArr.reduce((sum, n, index, originArr) => {
  return sum + n;
}, 5);
// reduce의 끝에는 기본값을 부여할 수 있는데
// 현재 코드에서는 기본 값을 5를 부여했다 만약 기본값을 5를 부여했을 때 처음 n의 값은 5가 된다
// 그 이후부터는 배열의 요소를 그대로 가지고 온다
// 그러나 만약에 기본 값이 없다면 배열의 첫 요소를 n으로 부옇한다

const products = [
  {
    id: 1,
    produceName: "컴퓨터",
    status: 0,
  },
  {
    id: 1,
    produceName: "노트북",
    status: 1,
  },
  {
    id: 1,
    produceName: "자동차",
    status: 0,
  },
];

// evert
const evertResult = products.every((product) => product.status === 0); // false
// some
const someResult = products.some((products) => products.status === 0); // true
