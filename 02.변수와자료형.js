//변수
//let 또는 const(=상수, 선언과 동시에 초기화하고 이후엔 수정 x)

//자바스크립트의 자료형
//1.숫자(정수, 실수-부동소수)
//let num1=10;
//let num2=5;
//console.log(num1+num2);

//2.문자 : string('나 "로 감싸여진 데이터, 문자열)
//let name="홍길동"
//let age=33
//console.log(name+10);
//console.log(name+num1);
//console.log(name*num1);//NaN:not a number(숫자 데이터 x:연산이 잘못된)
//console.log(name/num1);//NaN
//문자->숫자, 숫자->문자:형변환(Casting) 처리가 필요함~
//console.log(name.length*num1);

//3.논리형 : boolean(참, 거짓)
//자바스크립트를 실행==>무조건~ 조건이 참일 떄, 거짓일 때 각기 다른 실행!!
//num1, num2 값을  비교: 같다,크다,작다,크거나 같다,작거나 같다
//+:덧셈 연산자, (문자열)연결 연산자
//==,>,<,>=,<=,!=
//console.log(num1<num2);

//num1 < num2 ? console.log("num2가 num1보다 크다") : console.log("num2가 num1보다 작다");
//                     true                                false
//회원 로그인 id/pw를 저장된 id/pw와 비교해서 ~같다면~처리!!

//let islogged=true;
//islogged ? console.log("로그인을 환영합니다") : console.log("ID/PW를 다시 확인해주세요")

//4.배열
//값을 열거한 형태 ==> 변수:메모리 공간에 하나의 데이터 값 저장, 배열:메모리 공간에 여러 데이터 값 저장
//4-1.배열 사용하지 않고 사람정보 데이터를 저장
let userName = "김길동";//문자
let userAge=35;//숫자
let userBorn="광주";
let userPhone="010-2869-4100";
let userMarried= false;//기혼여부
console.log(userName+"은 나이가"+userAge+"세 이고, 사는 곳은"+userBorn+"입니다. 폰번호는"+userPhone+"이며, 현재 "+userMarried+"입니다.");

//4-2.배열을 사용해 사람정보 데이터를 저장:,를 이용해 어떤 자료라도 입력할 수 있다.
let user = [
    "이순신",
    50,
    "전라남도",
    "010-2869-4100",
    true
];

console.log("이름은"+user[0]+", 나이는 "+user[1]+", 세이고 사는 곳은 "+user[2]+"이며 핸드폰 번호는"+user[3]+"이고 "+user[0]+"님은 "+user[4]+"입니다.");

//5.객체:변수(=멤버 변수), 함수(=맴버함수/메소드)
let human = {
    name:"이몽룡",
    age:25,
    getInfo: function(){//함수(function)이고 이름인 getInfo
        console.log(this);    
        console.log("이름은 "+this.name+"이고, 나이는 "+this.age+"세입니다.");
        }
    }; //객체형 변수 리터널(문자) vs 배열형 변수 리터널 : []  ():소괄호, {}:중괄호, []:대괄호
console.log(human["name"],human["age"]);
human["name"]="최몽룡";
//human.grtInfo();//human 객체에 정의된 getInfo(함수를 실행해)

//6.함수:function (뭔가 처리하는 코드 덩어리), 나중에 재사용하기 위해서
//6-1 선언식 함수
function sayHello(){//선언 ==>메모리에 저장
    console.log("안녕하세요!!");
    }
sayHello();//sayHello function


//7.undefined d와 null
//7-1undefined: 변수를 선언만하고, 값을 저장(=초기화)하지 않은 상태

let option;
console.log(option); //데이터가 있는지 없는지 모르는 상태

let choise = null;
console.log(choise);//데이터가 확실히 없는 상태, 기존의 데이터를 비워낼 때

option ? console.log("true") : console.log("false");
choise ? console.log("true") : console.log("false");