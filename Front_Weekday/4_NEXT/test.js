let ar = [10, 20, 30];

// map 함수는 기존에 있는 배열을 기반으로 세로운 배열을 만들고자 할때 사용한다

let res = ar.map((a, index, c) => {
  //   console.log(a); // 10, 20, 30 출력
  //   console.log(b); // 0, 1, 2
  //   console.log(c); // ar, ar, ar
  return a * index;
});
// forEach() 함수와 동일하지만 map함수는 사용결과가 배열이다

console.log("res:", res);

console.log("======================================================");

let data = [
  { title: "대모험", page: 20 },
  { title: "나의 책", page: 230 },
  { title: "재미있는 책", page: 50 },
];

// 1번 반복 a: { title: "대모험", page: 20 }, b: 0, c: [
//                                                      { title: "대모험", page: 20 },
//                                                      { title: "나의 책", page: 230 },
//                                                      { title: "재미있는 책", page: 50 },
//                                                     ];
