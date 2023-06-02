//제어문(control statement:변수, 표현식, 자료형,....)

//1.조건문 vs 삼항조건 연산자
//비교연산자(크기비교), 관계연산자(and,or,not) 사용
//1-1.if:단순 if구문
/*let isopen = true;

if(isopen){
     console.log('모달을 닫아주세요.')
    };
*/
//1-2.if~else : 조건식이 true or false
//id:admin, pw:1004
/*
if(사용자입력id === "admin"){
    if(사용자입력pw === '1004'){
        alert("마이페이지로 이동합니다.");
        location.href = "/mypages";
    }else{
        alert("아이디 또는 비밀번호를 다시 확인하세요");
        location.href = "/home"
        }
}else{
    alert("아이디 또는 비밀번호를 다시 확인하세요");
}
*/
//1-3.if ~else if
//조건식이 여러개일떄
//조건 ? true일떄 실행코드 : false일 떄 실행코드;//삼항조건 연산자

//2.선택문
//2-1.swith ~ case

//3.반복문
//반복문에 변수는 짧게 작성: 보통 i,j,k,l 등등
//3-1.while : 조건식이 참일 때 코드를 반복실행, *증감식을 생략하면 무한 루프!=>다운먹음
/*let j = 0;
while(j<100){
    console.log("안녕하세요"+j+'번째, 고객님');
    j++;
    }
*/
//3-2.for(초기값; 조건식; 증감식){..실행할 코드..}
/*for(let count = 1; count <=10; count++){
    console.log('안녕하세요' +count+'번째 고객님');//반복, 실행코드
    };
*/
//3-3.for ~ of+배열자료형(array)
/*const user = [
    "이순신",
    50,
    "전라남도",
    "010-2869-4100",
    true
];
*/

/*
const numbers = [10, 5, 3, 100, 25];
let total = 0;
for(let i=0; i<numbers.length; i++){
    total+numbers[i];
}


for(Number of numbers){
    total += number;
    };

console.log("numbers 원소의 합계 : "+total);
*/

//3-4.for ~ in+객체 자료형(object)
/*
let human = {
    name :"이몽룡",
    age : 25,
    birth : new Date()
    };
for(let i=0, i<3,i++){
    console.log(human[i]);
}

for(key in human){
    console.log(human[key]);
    }
*/
//length:배열의 갯수를 알려주는 속성이라 오브젝트에는 안씀


