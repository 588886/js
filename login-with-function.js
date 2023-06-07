//함수로 만드는 로그인 기능
//샘플ID/PW : admin / admin1004

const admin={
    id:"admin",
    pw:"admin1004"
}
/*
function userlogin(user_id, user_pw){
    if
}

let userlogin=(admin.id, admin.pw);

*/

//()=> : function()

//form이 데이터 전송 후 새로고침되지 않도록 조치
const loginForm = document.querySelector('form');
loginForm.addEventListener('sibmit', (e) =>{ //form안에 버튼때문에 submit이 발생!
    e.preventDefault(); //데이터 전송 후 새로고침하지 않도록 조치
})

const loginBT = document.querySelector('#loginBt');

loginBT.addEventListener("click", ()=> {
    let userId=document.querySelector('#user_id');
    let userPw = document.querySelector('#user_pw');
    if(userId.value==""){
        alert("아이디를 입력하세요");
        userId.focus();
    } else if (userPw.value==""){
        alert("비밀번호를 입력하세요.");
        userId.focus();
    } else {
        userLogin(userId.value, userPw.value);
    }
})


let userlogin = function(userId, userPw){ //표현식
    if(admin.id == userId){
        if(admin.pw == userPw){
            alert("로그인 성공!");
            confirm("관리자 페이지로 이동하시겠습니까?") ? console.log('관리자 페이지로 이동') : null
            return "success";
        }else {
            alert('로그인 실패, id와 pw를 확인하세요');
            return "fail";
        }
    }else{
        alert('로그인 실패');
        return "fail";
    }
    return "success"
}

if(islogin == "success"){

}
//const loginBT = document.querySelector('#loginBt');


