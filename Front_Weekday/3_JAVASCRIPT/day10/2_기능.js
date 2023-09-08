console.log("기능");

let idInput = document.querySelector("#input-id");
idInput.oninput = (e) => {
  console.log(e.target.value);

  const emailPattern =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  let idP = document.querySelector("#id-msg");

  if (!e.target.value) {
    idP.textContent = "필수정보입니다";
    idP.style.color = "red";
  }

  if (e.target.value.match(emailPattern)) {
    idP.textContent = "멋진 id네요!";
    idP.style.color = "green";
    return; // 함수종료
  }

  idP.textContent = "email 형식을 지켜주세요!";
  idP.style.color = "red";
};

// let idInput = document.querySelector("#input-id");
// idInput.oninput = (e) => {
//   console.log(e.target.value);

//   let idP = document.querySelector("#id-msg");

//   if (e.target.value.includes("@") && e.target.value.includes(".")) {
//     idP.textContent = "멋진 id네요!";
//     idP.style.color = "green";
//     return; // 함수종료
//   }

//   idP.textContent = "email 형식을 지켜주세요!";
//   idP.style.color = "red";
// };

// 비밀번호가 잘 입력되었는지 확인
// 6~12자리 숫자와 문자가 포함되어야한다
// 8~15자리 숫자와 문자, 대문자 특수문자...

// 비밀번호입력 input 태그 객체 가져오기
let pwInput = document.querySelector("#input-pw");
pwInput.oninput = (e) => {
  console.log(e.target.value);
  // e.target.value 에 들어있는 값은
  // 사용자가 비밀번호 input 창에 입력한 값이다

  // 이값이 비밀번호 패턴하고 일치하지 않는다면
  // 빨간색 글씨로 경고 메시지 보여주기
  // 최소8자 이상의 숫자와 문자 조합
  const pwPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  let tmp = document.querySelector("#pw-msg");

  if (!e.target.value.match(pwPattern)) {
    tmp.textContent = "올바른 비밀번호 양식을 지켜주세요";
    tmp.style.color = "red";
    return;
  }
  tmp.textContent = "";
};
