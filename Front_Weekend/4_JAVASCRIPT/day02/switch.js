let month = 2;
/*
변수의 이름

가독성을 위하여 해당 변수가 무엇을 의미하는지 명확하게 적어야하며
근래에는 독일어 표기법으로 변수명이 길어지더라도 그 의미를 명확하게 지어 주어야함

표기법

카멜 표기법
    ex)
        math score
        mathScore

파스칼 표기법
    ex)
        MathScore

헝가리언 표기법
    ex)
        intMathScore

스네이크 표기법
    ex)
        math_score

케밥 표기법
    ex)
        math-score
        html class={math-score}
*/

switch (month) {
  case 1:
    console.log("January");
  case 2:
    console.log("Fabruary");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("None");
}
