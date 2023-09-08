// console.log(prompt(10, "안녕"));

// document.write("안녕");

// alert("잘못된 접근입니다!");

// console.log(confirm("진행 하시겠습니까?")); // true or false로 출력

// 사용자에게 prompt로 이름을 입력 받고
// 어서오세요 배상엽님
// 출력하기
let userName = prompt("이름을 입력하세요");
document.write("<h2>어서오세요", prompt("이름을 입력하세요"), "님</h2>");
document.write("<p>", prompt("이름을 입력하세요"), "님의 등급은 VIP입니다</p>");

// 형식을 지저안 문자열 만들기
// '' "" ``
// `` 안에 ${} 를 사용하면 해당 부분은 문자열이라고 인식하지 않고 자바스크립트 명령어로 인식
document.write(`<p>${userName}님의 등급은 VIP입니다</p>`);
