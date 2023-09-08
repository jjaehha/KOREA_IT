console.log("=========");
const onButtonHandler = () => {
  //   console.log("안녕");
  let tmp = document.querySelector("#box1");
  console.log([tmp]);
  // console.log(tmp.id);
  // tmp.id = "hello";
  // 특정 요소 속에 들어있는 문자값을 조회하거나 변경하기
  // 1. innerText 속성
  // 2. textContent 속성
  console.log(tmp.textContent);
  tmp.textContent = "안녕";
};

let box2Div = document.querySelector("#box2");

// const onButton2Handler = () => {
//   //   console.log("box2 클릭됨!");
//   let tmp = document.querySelector("#box2");
//   // innerHTML: html 코드로 인식하도록 안족에 설정할 대 사용
//   tmp.innerHTML = "<h1>2</h1>";
// };

// const onButton2Handler = (e) => (e.target.ineerHTML = "<h1>2</h1>");

// box2Div.onclick = e.target.ineerHTML = "<h1>2</h1>";

// console.log([box2Div]);

// addEventListener 함수
let box3Div = document.querySelector("#box3");
// addEventListener(이벤트이름 문자열, 함수)

// box3의 배경색상 변경
box3Div.addEventListener("click", (e) => {
  let tmp = e.target; // box3 id를 가진 div 객체
  tmp.style.height = "500px";
  tmp.style.backgroundColor = "red";
});
