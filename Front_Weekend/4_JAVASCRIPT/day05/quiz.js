/*
자판기라는 함수를 정의

자판기의 함수는 처음에 실행되었을 때 자판기가 가동되었습니다가 출력
자판기 함수의 파라미터로는 coin, menu

자판기 함수의 반환값은

잔돈이 0원이며 음료수 이름을 반환
잔돈이 있으면 음료수 이름과 잔돈을 반환
음료수보다 금액이 적을 경우 금액이 부족합니다 반환
없는 메뉴를 파라미터로 전달하였을 때는 존재하지 않는 상품 입니다. 반환

메뉴
솔의눈: 300원
비타500: 500원
콜라: 1000원
*/

// 실패작
/*
function 자판기(coin, menu) {
  const menu = {
    솔의눈,
    비타500,
    콜라,
  };

  console.log("자판기가 가동되었습니다");

  price - menuprice === coin;

  if (coin === 0) {
    console.log(menu);
  } else if (coin > 0) {
    console.log(menu, coin);
  } else if (coin < price) {
    console.log("금액이 부족합니다");
  } else if (menu === undefined) {
    console.log("존재하지 않는 상품 입니다");
  }
}
*/

function 자판기(coin, product) {
  let change; // 잔돈
  let menu = { 솔의눈: 300, 비타500: 500, 콜라: 1000 };

  // 300원 ---> 원X ---> parsInt("300")

  let selectedPrice = menu[product]; //파라미터로 전달 받은 품목의 가격

  //예외처리
  if (!selectedPrice) return console.log("없는 재품입니다");
  if (coin < selectedPrice) return console.log("금액 부족");

  // 로직
  change = coin - selectedPrice;

  if (change === 0) return console.log(product);
  console.log(product, change);
}
