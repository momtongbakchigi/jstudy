// 13. 스코프
// 유효 범위 (예제 13-01~)
// function add(x,y) {
//     console.log(x,y);
//     return x+y;
// }

// add(2,5);
// a = add(2,5);

// console.log(x+y); // x가 낫 디파인 됬다.

// var var1 = 1;

// if(true) {
//     var var2 = 2;
//     if(true) {
//         var var3 = 3;
//     }
// }

// function foo() {
//     var var4 = 4;
//     function bar() {
//         var var5 = 5;
//     }
// }

// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var4); // no
// console.log(var5); // no

var x = 'global';

function foo() {
    var x = 'local';
    console.log(x);
}

foo();

console.log(x);