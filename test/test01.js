
// 1. Template Literal  (백틱 사용하기)
// 다음 변수를 이용하여 콘솔에 오른쪽 주석과 같이 나타내시오.
const name1 = 'Alice';
const age1 = 30;
console.log(`제이름은 ${name1}이고, 나이는 ${age1}살입니다.`); 
// 제 이름은 Alice이고, 나이는 30살입니다.

// 2. 화살표 함수 문제: 주어진 함수를 화살표 함수로 변환해보세요.
// [함수명 : greet_2 ]
greet_2 = (a, b) => {
  return a * b;
}

// 3. 화살표 함수 문제2 _ Arrow Function
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(7, 5)); //addNumbers를 사용하여 7+5를 수행하시오.




// 4. object의 속성을 추가하고 활용하기 : 주어진 객체에 새로운 속성을 추가해보세요.
const person4 = {
  name: 'Alice',
  age: 25,
  jender: 'woman'
};

// 4-1. person 객체에 height 속성을 추가해보세요 (height 값은 170)
const person4_1 = {
    height: 170
}

// 4-2. person 객체의 name 속성과 age 속성을 출력해보세요
console.log(person4.name, person4.age);

// 5. 동등 연산자와 일치 연산자
console.log(1 == "1"); 
console.log(1 === "1"); 
// 5-1. 다음 값이 다른 이유는?
console.log("==은 값만 비교하지만 ===은 변수의 타입까지 구분하기 때문이다.")

// 6. null과 undefined
let a = null;
let b;
console.log(a == b); 
console.log(a === b); 
// 6-1. 다음 값이 다른 이유는?
console.log("null은 값이 없다는 것이고 undefined는 값을 정하지 않았다는 것이다")


// 7. JSON 데이터를 객체로 그리고 문자열로 바꾸는 퀴즈:
// JSON 형식의 문자열
const jsonStr7 = '{"name":"Alice","age":30}';

// JSON 문자열을 객체로 변환하여 로그에 나타내보세요.
const jsonStr4 = JSON.parse(jsonStr7);

// 객체의 age 값을 출력해보세요.
console.log(jsonStr4.age);

// 객체를 JSON 문자열로 변환하여 로그에 나타내보세요.
console.log(JSON.stringify({name: 'runa', age: 25}))

// 8. Nullish Coalescing Operator
const name8 = '';
const displayName1 = name8 ?? 'Anonymous';
const displayName2 = name8 || 'Anonymous';

console.log("displayName1 : " + displayName1); 
console.log("displayName2 : " + displayName2);

// 8-1. 다음 값이 다른 이유는?
console.log("??는 앞에 값이나 뒤에 값을 출력해주는데 ||는 앞에 값이 true인것이냐 false인 것을 출력해주는 연산자이기 때문이다") 
