//함수:코드를 저장하기 위한 목적, 반복, 재사용의 목적을 가진 코드덩어리

//1.함수 선언식
//함수명은 영어, 숫자, 케멀케이스(say+hello=sayHello | 합성어)
//1-1.반환값이 없는 함수 + 매게변수(parameter)X
/*function sayHello(){
    console.log('Hello, everyone!')
}
sayHello();
*/

/*let user = "길동"
//1-3.반환값이 없고 매개변수가 있는 함수 선언식
function sayHello(who){
    console.log('hello '+who+"~!");
}
sayHello(user);
sayHello("son");
sayHello("ss");
*/

//1-2.반환값이 있는 함수 : 함수 실행결과를 함수 밖으로 내보내는 ~ return을 사용
//두 수의 값을 계산하는 코드를 js 작성한다면?
/*function plusn(num11, num22){
    return num11+num22;
    console.log('vm')
    console.log('vm')
}
let result = plusn(50,30);
console.log("두수의 합: "+result);
plusn();
*/

//1-4.반환값이 있고, 매개변수X 
/*function 함수명(){
    console.log('say hi~');
    return 결과값;
}
let final 
*/

//리턴과 파라미터의 유무 확인

//2.함수 표현식(=익명함수)(권장X)
//선언식일 항상 앞에 있을것
//hoisting
/*let hello = function(name){
    console.log("hello!!! "+name+"!, long time no see~");
}
//사이트 회원-로그인했을 때 인사말을 각기 다른 회원에게 출력: console.log => alert
hello('Steve');
*/

//3.화살표 함수
//3-1.선언식
//3-2.표현식
/*
function sayHello(){
    console.log('hello')
}
sayHello();
*/

//3-3
//const sayHello = () => console.log("hello");

//3-1,3-2 일반 함수
/*function minusNumber(N1,N2){
    if(N1 > N2){
    return N1-N2
    }else{
        return N2-N1
    }
}
*/

let minusNumber = (N1,N2) => N1-N2;

let result = Math.abs(minusNumber(10, 30));
console.log(result);

//화살표함수
