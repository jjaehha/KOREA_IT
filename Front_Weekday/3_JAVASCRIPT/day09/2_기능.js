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
