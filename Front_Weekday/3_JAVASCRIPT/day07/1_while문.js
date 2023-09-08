let i = 0;

while (i < 3) {
  console.log("김재하");
  i++;
}

while (true) {
  let num = prompt("문자열 입력");

  console.log("당신이 이력한 문자열은", num, "입니다");
  if (num === "종료") {
    break;
  }
}
