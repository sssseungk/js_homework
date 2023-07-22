// ? 시간이 부족해서 리드미는 작성하지 못했습니다 죄송합니다..🥹



// ! 사용자의 아이디, 비밀번호
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

// html 에서 각각 태그 불러오기 
const email = document.querySelector('#userEmail')
const pw = document.querySelector('#userPassword')
const button = document.querySelector('.btn-login')

let emailPass = false;
let pwPass = false;

// 아이디 올바르게 썼는지 확인하기
email.addEventListener('input', function () {
  if (emailReg(this.value)) {
    this.classList.remove('is--invalid')
    emailPass = true
  } else {
    this.classList.add('is--invalid')
    emailPass = false
  }
})

// 비밀번호 올바르게 썼는지 확인하기
pw.addEventListener('input', function () {
  if (pwReg(this.value)) {
    this.classList.remove('is--invalid')
    pwPass = true
  } else {
    this.classList.add('is--invalid')
    pwPass = false
  }
})

// 로그인 성공하면 페이지 넘어가게 하기
button.addEventListener('click', (e) => {
  e.preventDefault();
  if (emailPass && pwPass) {
    alert('로그인 성공!');
    window.location.href = 'welcome.html';
  }else{
    console.log('비밀번호가 틀렸습니다.');
  }
})

// 다른 함수들 한 번에 실행하는 로그인 함수
function login(){
  email.addEventListener();
  pw.addEventListener();
  button.addEventListener();
}


// 사용자가 이메일 잘 입력했는지 확인하는 코드 
function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

// 사용자가 비밀번호 잘 입력했는지 확인하는 코드
function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}





// ----------------------------------------------------
// * 해보다가 실패한 코드... (페이지 안넘어감)

// function idValidation(){
//   // html에서 id값 가져오기
//   let idInput = document.querySelector("#userEmail");
//   // 이메일 형식대로 입력되어있지 않으면(false)이면  
//   if(!emailReg(idInput.value)){
//     // is--invalid 클래스 추가해주기 
//     idInput.classList.add('is--invalid');
//   } else{
//     idInput.classList.remove('is--invalid');
//   }
// }


// function pwValidation() {
//   let pwInput = document.querySelector("#userPassword")
//   if(!pwReg(pwInput.value)){
//     pwInput.classList.add('is--invalid');
//   } else{
//     pwInput.classList.remove('is--invalid');
//   }
// }


// function login(){
//   idValidation();
//   pwValidation();

//   let idInput = document.querySelector("#userEmail");
//   let pwInput = document.querySelector("#userPassword");
//   let loginBt = document.querySelector("button");

//       // 로그인 버튼을 클릭했을 때
//   loginBt.addEventListener('click', (e) => {
//     e.preventDefault();
//     // 아이디랑 비밀번호가 옳다면
//     if (idInput.value === user.id && pwInput.value === user.pw) {
//       // event.preventDefault();
//       // 페이지 이동하기 => 왜 안되지 ...?
//       window.location.href = 'welcome.html';
//     }
//     else{
//       alert('비밀번호가 틀립니다.');
//     }
//   })
// }