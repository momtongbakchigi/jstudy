//함수
//예제 12-1~3

const { functionsIn } = require("lodash");

// const { functionsIn } = require("lodash");

// function add(x,y) {
//     return x+y;
// }// 함수 정의 ( 선언문 )

// var result = add(2,5); // 함수 호출
// console.log(result);

//함수 리터럴 => 함수 = 객체
// 함수는 객체 타입의 값이므로 함수도 함수 리터럴 생성 가능
// 예제 12-4
// var f = function add(x,y){
    //     return x+y;
    // } // 함수 표현식
    
// 함수 정의는 선언문, 표현식 Function 생성자 함수, 화살표 함수 네가지가 있다.
// 1. 함수 선언문 (에제 12-5~9) = 함수 이름 생략 불가
// function add(x,y) {
//     return x+y;
// }// 함수 정의 ( 선언문 )

// console.dir(add);
// console.log(add(2,5));

// function foo() {
//     console.log('foo');
// }

// foo();

// (function bar() {console.log('bar');});

// bar();
// foo는 암묵적으로 자바스크립트 엔진이 식별자를 만들어 주는데 bar는 안 만들어줌
// 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출함

// 2. 함수 표현식 (예제 12-10~11)  = 함수 이름이 없어도 됨, 값의 성질을 갖는 일급 객체
// var add = function foo (x,y) {
//     return x + y;
// };
// console.log(add(2,5));
// console.log(foo(2,5)); // 위의 표현식에서만 쓰인거라 안됨

// *함수 생성 시점과 함수 호이스팅
// console.dir(add);
// console.dir(sub);//undefined

// console.log(add(2,5));
// console.log(sub(2,5));//not a function

// function add(x,y) {
//     return x+y;
// }

// var sub = function (x,y) {
//     return x-y;
// }

// 함수 생성 시점이 달라서 이런 오류가 생김
// 함수 선언문은 선두로 끌어 올려진 것처럼 작동 ( 함수 호이스팅 )
// 변수 할당문의 값은 할당문이 실행되는 시점인 런타임에 평가됨
// 그러므로 함수 표현식의 함수 리터럴도 같은 시점에 평가되어 객체가 됨 ( 변수 호이스팅만 발생함 )

// 3. Function 생성자 함수 = 객체를 생성하는 함수
// 예제 12-13~14
// var add = new Function('x','y','return x+y');
// console.log(add(2,5));

// var add1 = (function() {
//     var a = 10;
//     return function (x,y) {
//         return x+y+a;
//     };
// }());

// console.log(add1(1,2));

// var add2 = (function() {
//     var a = 10;
//     return new Function('x','y','return x+y+a');
// }());

// console.log(add2(1,2));

// 생성자 함수는 클로저를 생성하지 않는 등 문제가 많음 

// 4. 화살표 함수 (예제 12-15)
// const add = (x,y) => x+y;
// console.log(add(2,5));

// 화살표 함수는 생성자 함수로 사용 불가능 하고, 기존 함수와 this 바인딩 방식이 다르고 prototype 프로퍼티가 없으며,
// argument 객체를 생성하지 않음. 그러므로 화살표 함수를 사용하려면 그전에 위의 것들을 살펴보고 사용해야 함

// 함수 호출(예제 12-16~25)

// function add(x,y) {
//     console.log(x,y);
//     console.log(arguments);
//     return x+y;
// }

// add(2,5)

// console.log(x,y);//안됨
// console.log(2); // undefined
// console.log(2,5,10) // 7이 나오고 10은 arguments에 저장됨
// 매개 변수는 x,y이고 인수는 쓰이는 값들인 2,5 등

// function add(x,y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new TypeError('숫자 아님');
//     }
//     return x+y;
// }// 다 숫자 타입인지 확인해 주고 싶을 때

// console.log(add(2));
// console.log(add('a','b'));

// function add(a=0,b=0,c=0) {
//     a = a || 0;
//     b = b || 0;
//     c = c || 0;
//     return a+b+c;
// }

// console.log(add(1,2,3));
// console.log(add(1,2));
// console.log(add(1));
// console.log(add());

// 매개변수 최대 개수 예제 12-26
// 적을수록 조음 ㅋㅋ

// 반환문 예제 12-27~32
// function mutiply(x,y) {
//     return x*y;
//     console.log('실행안됨');
// }

// var result = mutiply(2,5);
// console.log(result);
// 반환문을 생략하거나 아무값도 안넣으면 자동으로 undefined
// 다음줄로 넘어가도 자동으로 세미콜론 들어가서 undefined

//참조에 의한 전달과 외부 상태 변경 (예제 12-33)

// function changeVal(primitive, obj) {
//     primitive += 100;
//     obj.name = 'shin';
// }

// var num = 100;
// var person = {name:'Lee'};

// console.log(num);
// console.log(person);

// changeVal(num, person);

// console.log(num);// 값 자체 복사
// console.log(person);// 원본이 회손되고 참조 값 복사

// 다양한 함수의 형태 (예제 12-34~42)

// 즉시 실행 함수 = 반드시 그룹 연산자로 감싸야 함
// 익명 즉시 실행 함수
// (function () {
//     var a = 3;
//     var b = 5;
//     return a*b;
// }());
// // 기명 즉시 실행 함수
// (function foo() {
//     var a = 3;
//     var b = 5;
//     return a*b;
// }());

// foo();

// (function () {
//     //
// }());

// (function () {
//     //
// })();

// !function () {
//     //
// }();

// +function () {
//     //
// }();

// var res = (function () {
//     var a = 3;
//     var b = 5;
//     return a*b;
// }());

// console.log(res);

// res = (function (a,b) {
//     return a*b;
// }(4,6));

// console.log(res);

// 재귀함수 (예제 12-43~)
// 반복문
// function countdown(n) {
//     for(var i =n; i>=0;i--) console.log(i);
// }

// countdown(10);
// // 재귀 함수
// function countdown1(n) {
//     if(n<0) return;
//     console.log(n);
//     countdown(n - 1);
// }

// countdown(3);
// //재귀 
// function factorial(n) {
//     if(n<=1) return 1;
//     return n*factorial(n-1);
// }

// console.log(factorial(5));

// // 한정적 재귀 함수
// function factorial1(n) {
//     if(n<=1) return 1;

//     var res = n;
//     while(--n) res *= n;
//     return res;
// }

// console.log(factorial1(6))

// 콜백 함수 (예제 12-49)

// function repeat(n) {
//     for(var i = 0; i < n; i++) console.log(i);
// }

// repeat(5);

// function repeat2(n){
//     for(var i =0; i <n; i++) {
//         if(i%2) console.log(i);
//     }
// }

// repeat2(6)

// function repeat(n,f) {
//     for(var i=0; i < n; i++){
//         f(i);
//     }
// }//고차함수

// var logAll = function (i) {
//     console.log(i);
// };//콜백함수

// repeat(5, logAll);

// var logOdds = function (i) {
//     if (i%2) console.log(i);
// };

// repeat(6,logOdds);

// document.getElementById('myButton').addEventListener('clcik', function(){
//     console.log('button clicked');
// });

// setTimeout(function () {
//     console.log('1초 경과');
// }, 1000);

// var res = [1,2,3].map(function (item) {
//     return item*2;
// });

// console.log(res);

// res = [1,2,3].filter(function (item) {
//     return item % 2;
// });

// console.log(res);

// res = [1,2,3].reduce(function (acc,cur) {
//     return acc + cur;
// }, 0);

// console.log(res);

// 순수 함수와 비순수 함수 (예제 12-56~)

// var count = 0;

// function increase(n) {
//     return ++n;
// }

// count = increase(count);
// console.log(count);

// count = increase(count);
// console.log(count);

// function increase() {
//     return ++count;
// }

// increase();
// console.log(count);

// increase();
// console.log(count);