console.log(1);

let ar = ['김철수', 10, true, [1, 2, 3]];
console.log(ar); // (4) ['김철수', 10, true, Array(3)]
console.log(ar[0]); // 김철수
console.log(ar[1]); // 10
console.log(ar[2]); // true
console.log(ar[3]); // [1, 2, 3]
//console.log(ar[4]); // undefined

console.log(ar[3][0]); // 1
console.log(ar[3][1]); // 2
console.log(ar[3][2]); // 3

console.log('수정전 ar:', ar);
ar[0] = '홍길동'
console.log('수정후 ar:', ar)
ar[3][0] =100;
console.log('ar :', ar)

// 이차원 배열 : 행열
let arr = [
//   0,1,2
    [1,2,3], //0
    [4,5,6], //1
    [7,8,9]  //2
    [10,20,30], //3
    [100,200,300], //4
];

console.log(typeof arr);
console.log(typeof ar);