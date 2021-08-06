//14장 전역변수의 문제정
// 변수의 생명주기 (예제 14-01~)
// function foo() {
//     var x = 'local';
//     console.log(x);
//     return x;
// }
// foo();
// console.log(x); // x는 함수 스코프니까 읎다

// var x = 'global';

// function foo(){
//     console.log(x);
//     var x = 'local';
// }

// foo();
// console.log(x);

// var y = 1;
// var y = 100;
// console.log(y);

// 즉시 실행 함수 ( 예제14-04 )
// (function () {
//     var foo = 100;
// }());

// console.log(foo);

// 네임 스페이스 객체 (예제 14-05~ )
// var MYAPP = {};

// MYAPP.person = {
//     name = 'Lee',
//     address = 'Incheon'
// };

// console.log(MYAPP.person.name);

// 모듈 패턴 (예제 14-07~)
// var Counter = (function() {
//     var num = 0;

//     return {
//         increase() {
//             return ++num;
//         },
//         decrease() {
//             return --num;
//         }
//     };
// }());

// console.log(Counter.num);
// console.log(Counter.increase());
// console.log(Counter.increase());
// console.log(Counter.decrease());
// console.log(Counter.decrease());

{/* <script type = "module" src= "lib.mjs"></script> */}
{/* <script type = "module" src= "app.mjs"></script> */}

