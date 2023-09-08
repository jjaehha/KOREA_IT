console.log([document]);

//document.getElementById("box1").textContent = "안녕";

// 함수 사용 결과는 무조건 배열(HTMLCollection 타입)
let res = document.getElementsByClassName("container");
console.log(res);

//res[1].textContent = "하이";

res = document.getElementsByTagName("div");
console.log(res);

// 선택자로 받아오는데 최초 한개만 결과로 가져온다
res = document.querySelector("div");
console.log(res);

// 선택자로 받아오는데 결과가 배열(NodeList 타입)에 담긴다
document.querySelectorAll("div");
