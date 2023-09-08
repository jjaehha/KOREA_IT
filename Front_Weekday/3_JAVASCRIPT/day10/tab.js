// 탭버튼 div 3개가 들어있는 배열 가져오기
let tabBtns = document.querySelectorAll(".tab-menus > div");

console.log(tabBtns);

//foreach 함수(배열객체 안에 들어있는 함수)
// 배열을 반복문에서 보다 쉽게 사용할 수 있는 함수
// foreach 함수의 인자로는 콜백함수를 전달해야한다
//foreach 함수의 인자로 전달되는 콜백함수는 매개변수가필요한데
// 매개변수에는 배열 속 요소가 차례대로 담기게 된다

tabBtns.forEach((value) => {
  // value에는 tabBtns 배열 속 요소가 차례로 담긴다
  // console.log(value);
  value.onclick = (e) => {
    // console.log(e) // e에는 클릭과 관련된 데이터가 들어있는 이벤트 객체
    // 만약 클릭이 된다면 기존의 tabBtns에서 active 클래스를 모두
    // 삭제를 해줘야 한다
    // tabBtns.forEach();으로 바꿔보기
    for (let i = 0; i < tabBtns.length; i++) {
      tabBtns[i].classList.remove("active");
    }

    // 클릭된 요소의 class로 active를 추가
    e.target.classList.add("active");

    // tab-contents 클래스를 가진 div 세개를
    // 모든 클래스 active가 없는 상태로 만들기
    let tabContents = document.querySelectorAll(".tab-contents");
    tabContents.forEach((v) => v.classList.remove("active"));

    // 내가 클릭한 번튼에 해당하는 div태그를
    //찾아서 클래스에다 active 추가하기
    let tmp = document.getElementById(e.target.dataset.tabid);
    tmp.classList.add("active");
  };
});

// for(let i = 0; i < tabBtns.length ; i++){
//     tabBtns[i].onclick = ()=>{};
// }

// tabBtns[0].onclick = ()=>{};

// tabBtns[1].onclick = ()=>{};

// tabBtns[2].onclick = ()=>{};
