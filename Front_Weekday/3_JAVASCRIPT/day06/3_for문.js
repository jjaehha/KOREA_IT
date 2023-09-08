// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

let ar = ["김재하", "김철수", "홍길동", "김영희"];

for (let i = 0; i < ar.length; i++) {
  console.log(ar[i]);
  if (ar[i] === "홍길동") {
    console.log(i + 1, "번째 홍길동 찾았다");
    break;
  }
}
