//연산 : 뭔가 계산~(컴퓨터는 ALU:연산장치 -->CPU-->프롬프트~)

//1.사칙연산:+,-,*,/

let n1=100,n2=3;

console.log("두수의 합 : "+(n1+n2));
console.log("두수의 차 : "+(n1-n2));
console.log("두수의 곱 : "+(n1*n2));
console.log("두수의 나눔 : "+(n1/n2));
console.log("두수의 나머지 : "+(n1%n2));
console.log("두수의 거듭제곱 : "+(n1**n2));


//2.문자연산 : +
//문자+숫자=> 문자
//문자+문자=> 문자
//문자*or/or - 숫자=> NaN

//3.관계연산:and(&&), or(||), not(!)
let result = n1>n2 && 4>3 && 10<5;
console.log(result);

//4.비교연산 : >,< ==(같다), ===(완전 같다), !=(같지 않다),!==(완전 같지 않다.)

//5. 대입연산자

//6.복합대입연산자
result +=10;
result *=2;
result /=2;
result -=10;

console.log(result);

//7.삼항 조건 연산자 : 조건 ? 참일 때 코드 : 거짓일 때 코드;
result < 0 ? console.log("음수!") : console.log("양수!");

//8. 증감 연산자 : ++, --
//8-1.전위 증감 연산자 : ++변수 or --변수
//8-2.후위 증감 연산자 : 변수++ or 변수--
let total = 0;
let count = 0;//뭔가 숫자를 세어서 그 값을 이용하는 변수
++count;
total = ++count;
console.log('count'+count); //카운트의 초기값 : 0
console.log('count'+total); //카운트의 초기값 : 0
count++;
total = count++;
console.log('count'+count); //카운트의 초기값 : 0
console.log('count'+total); //카운트의 초기값 : 0
