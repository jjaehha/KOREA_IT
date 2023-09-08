console.log("2번 js 파일");

//Math.ceil 함수 : 올림을 하는 함수, 인자는 숫자타입 1개 동작은 올림을 해준다...
//Math.ceil(13.5)
//Math.ceil(17.2)

// 함수 정의
// 1. 인자가 몇개, 무슨타입이 필요할까?
// 2. 함수 동작은 어떻게 구현할까?
// 3. 함수 사용 결과는 무슨 값으로 되돌릴(반환할, return 할)까?

function myFunction1(cnt = 3, name = "김하재") {
  //   if (cnt === undefined) {
  //     cnt = 5;
  //   }

  //   if (name === undefined) {
  //     name = "김재하";
  //   }

  console.log("cnt값:", cnt);

  for (let i = 0; i < cnt; i++) {
    console.log(i, name);
  }

  console.log("함수 끝!");
}

// 함수 호출

myFunction1();
myFunction1(8, "김재하");

console.log("이어서 개발중");

myFunction1(5);

console.log("======================================");

function myFunction2(a) {
  console.log("myFunction2 함수 실행됨!");
  console.log(a);
}

myFunction2(10);
myFunction2([10, 20]);
myFunction2([10, 20, 30]);

// 나머지 매개변수는 반드시 마지막에 작성해야하고
// 앞에 있는 인자들이 일반 매개변수에 전달된 후
// 나머지 인자들이 배열로 묶여서 한번에 나머지
// 매개변수에 전달되게 된다

function myFunction3(name, ...a) {
  console.log("myFunction3함수 실행됨");
  console.log(a);
}

myFunction3(10);
myFunction3(10, 20, 30);

console.log("=======================================");

// return
// 기본적으로 함수 사용 결과 값은 undefined 이다
// 함수 사용 결과를 특정한 값으로 만들고 싶을 때
// return 명령어를 사용한다.
// return 명령어의 해석 순서는 가장 마지막이다

function add(a, b) {
  //   console.log("a의 값", a);
  //   console.log("b의 값", b);
  //   console.log("두 수의 합:", a + b);
  return a + b;
}

console.log(add(10, 20));

let myRes1 = add(50, 70);

let f1 = add; // f1의 타입: funtion 타입

let f2 = add(10, 20); // f2의 타입: number , 30

console.log(f1(50, 100));

function myFunction4(a, b) {
  console.log(a);
  console.log(b);
}

myFunction4(add, add(10, 20));
