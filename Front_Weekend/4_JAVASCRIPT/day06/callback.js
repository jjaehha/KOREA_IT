// callback
// 부모한테 전달 받은 파라미터를 내 마음대로 로직을 작성할 수 있게 하기위하여 (재사용)

// callback 함수를 사용하지 않으면 부모 함수 내에서 직접 로직을 수정해야하고
// 재사용이 불가능하다

function parent(number, action) {
  for (let i = 0; i < number; i++) {
    action(i);
  }
}

parent(5, (index) => {
  console.log(index * 2); //0, 2, 4, 6,
});
