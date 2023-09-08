let name = "김재하";

let kor = 100;
let math = 50;
let eng = 50;
let tam = 90;

let avg = (kor + math + eng + tam) / 4;

let grade;

if (avg >= 90) {
  grade = "A";
} else if (avg >= 80) {
  grade = "B";
} else if (avg >= 70) {
  grade = "C";
} else {
  grade = "F";
}

console.log(name + "님의 이번 학기 성적은" + grade + "입니다");
