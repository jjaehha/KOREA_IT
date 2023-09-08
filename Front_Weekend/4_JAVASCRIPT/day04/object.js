const jaeha = {
  name: "김재하",
  age: 20,
  height: 186,
  hobby: "게임",
};

let post = {
  title: "example title1",
  content: "example content1",
  User: jaeha,
};

console.log(post.title);
console.log(post.content);
console.log(post["User"]);

// 객체의 데이터 수정 (재할당가능)
// 실제 데이터는 메모리 힘에 저장
// 변수/상수에는 메모리 힙의 주소 값이 저장
// 따라서 객체가 상수로 선언 되었다고 하더라도 주소값이 수정 되는 것이 아니기 때문에
// 상수로 선언되었다 하더라도 재할당이 가능하다

post.User = {
  name: "김철수",
};
console.log(post.User);

let kong = new Object(); // 비어있는 객체가 생성{}
// new 생성자

kong.name = "콩이";
console.log(kong);
kong.name = "멍멍이";
console.log(kong);

const newObj = Object.assign(jaeha, kong);
console.log(newObj);
