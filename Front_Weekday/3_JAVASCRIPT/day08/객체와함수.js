// 객체 속에는 property를 넣어줄 수 있다(key와 value 한쌍)
let book1 = {
  title: "대모험",
  page: 500,
  // 객체 안에 들어있는 함수 === 메소드
  intro: function () {
    console.log("객체속의 함수 실행됨!");
    // console.log(totle, page); // property를 이름 그대로 사용할 수는 없다
  },
};

console.log(book1);
console.log(book1.title);
console.log(book1.page);
book1.intro();

book1.onclick = function () {
  console.log("onclick 함수 추가");
};

console.log(book1);
book1.onclick();

// 생성자 함수
// 객체를 특정한 모양으로 찍어내서 생성해주는 역할을 한다
// 생성자 함수는 반드시 대문자로 시작해야한다

let Book = function (title = "기본값", page = 0) {
  this.title = title;
  this.page = page;
};

let book2 = new Book("자바스크립트", 300);
console.log(book2);

let book3 = new Book("파이썬", 200);
console.log(book3);
