let num = 25;

switch (num) {
  case 100:
    console.log("영역1");
  case 50:
    console.log("영역2");
  case 10:
    console.log("영역3");
  default:
    console.log("default영역");
}

console.log("switch문 바깥");

// 월 입력 받아서 일 출력하기 switch문으로

let month = 1;

switch (month) {
  case 1 || 3 || 5 || 7 || 8 || 10 || 12:
    console.log("31일이 마지막");
    break;
  case 2:
    console.log("28일이 마지막");
    break;
  default:
    console.log("30일이 마지막");
}
