// 15장 let, const 키워드와 블록 레벨 스코프
// var 변수의 문제점 (15-01~ )
// var x = 1;
// var y = 1;

// var x= 100;
// var y;

// console.log(x);
// console.log(y);
// var x =1;
// if (true) {
//     var x =10;
// }
// console.log(x);

// var i = 10;
// for(var i =0; i < 5; i++){
//     console.log(i);
// }
// console.log(i);

// console.log(foo);

// foo = 123;

// console.log(foo);

// var foo;

//let 키워드 (예제 15-05~)

// var foo = 123;
// var foo = 456;

// let bar = 123;
// let bar = 456; // 오류 이미 정의된 변수

// let foo = 1;

// {
//     let foo =2;
//     let bar =3;
// }

// console.log(foo);
// console.log(bar); // 블록 레벨 스코프라 안나옴
// console.log(foo);
// let foo;

// console.log(foo);
// var foo;
// console.log(foo);
// foo = 1;
// console.log(foo);

// console.log(foo);
// let foo;
// console.log(foo);
// foo = 1;
// console.log(foo);

// let 변수는 var 과 다르게 선언 단계와 초기화 단계가 나뉘어져 실행된다.

// let foo =1;
// {
//     console.log(foo);
//     let foo =2;
// }

// 즉 호이스팅이 안된다~~

// var x = 1;
// y = 2;
// function foo() {}

// console.log(window.x);
// console.log(x);
// console.log(window.y);
// console.log(y);
// console.log(window.foo);
// console.log(foo);

// const 키워드 (예제 15-13)
const foo =1;
const foo;

{
    console.log(foo);
    const foo = 1;
    console.log(foo);
}

console.log(foo);