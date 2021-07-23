//원시값
//예제 11-1
// const o = {};

// o.a = 1;
// console.log(o);
// 이렇게 원시 값 안의 객체는 값을 바꿀 수 있다
// 그러나 원시 값 자체는 값 바꿀 수 없음. ( 불변성 )

//예제 11-3
// var str = 'Hello';
// str = 'world';
// 이렇게 되면 식별자 str이 Hello가 저장된 메모리 공간의 첫번째 메모리 셀 가리키다가 
// world가 저장된 메모리 공간의 첫번째 셀 가리키는걸로 바뀜

//예제 11-4,5 ( 유사 배열 객체)
// var str = 'string';
// //배열과 유사하게 사용 가능
// console.log(str[0]);
// //원시 값인 문자열이 객체 처럼 동작
// console.log(str.length);
// console.log(str.toUpperCase());

// str[0] = 'S';

// console.log(str); // string
//이렇게 이미 생성된 문자열의 일부 문자 변경은 안됨
// 재할당은 가능 

//예제 11-6~8

// var score = 80;
// var copy = score; // 원시값 복사 (80)

// console.log(score);
// console.log(copy);

// score= 100;

// console.log(score);
// console.log(copy); // 여기선 이미 다른 곳에 80이란 값이 복사되서 온 것이므로 안바뀜

// console.log(score,copy)
// console.log(score === copy);
//두 변수가 같은 원시 값을 할당하다가 어느 한쪽의 변수에 재할당 되면 새로운 메모리로 가는 경우도 있음(파이썬)


//객체 => 프로퍼티 키를 인덱스로 사용하는 해시 테이블 but 더 나은 방식

// 예제 11-11~13

// var person = {
//     name: 'Lee'
// };
// // 객체에는 할당된 공간의 메모리 주소가 들어가 있고 할당된 공간에 그곳에 대한 정보들이 있음
// person.name = 'Kim'; // 프로퍼티 값 갱신
// person.address = 'Seoul'; // 프로퍼티 동적 생성

// console.log(person);

//여러개의 식별자가 하나의 객체를 공유할 수 있으니 비용이 많이든다.

// 예제 11-14~15 (얕은복사, 깊은 복사)
//얕은복사
// const o = { x: {y:1}};

// const c1 = {...o};
// console.log(c1 === o);
// console.log(c1.x === o.x);

// //깊은 복사
// const _ = require('lodash');
// const c2 = _.cloneDeep(o);
// console.log(c2 === o);
// console.log(c2.x === o.x);

// 원시값을 할당한 변수를 다른 변수에 할당하는 것이 깊은 복사, 객체를 할당한 변수를 다른 변수에 할당하는 것이 얕은 복사

//예제 11-16~18 참조에 의한 전달
// var person = {
//     name: 'Lee'
// };

// var copy = person;
// console.log(copy);

// //복사하면 원본의 참조 값(할당된 곳의 주소값)이 복사되어 전달 : 두개의 식별자가 하나의 객체를 공유

// copy.name = 'Kim';
// copy.addres = 'Incheon';

// console.log(person);
// console.log(copy);
