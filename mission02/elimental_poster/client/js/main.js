


//! 배경색 설정하는 함수 
function setBgColor(target, node){   // list : closest로
  if(typeof node === 'string') node = getNode(node);

  const index = attr(target, 'data-index'); // attr로 내가 선택한 것의 data-index값을 가져와서 index 변수 저장한다.

  if(!(data[index-1].color[1])){
    node.style.background = `linear-gradient(to bottom, ${data[index-1].color[0]} , #000)`;
  }
  else{
    node.style.background = `linear-gradient(to bottom, ${data[index-1].color[0]} , ${data[index-1].color[1]})`;
  }
}

//! 배경이미지, 대체텍스트 설정하는 함수
function setImage(target, node){
  if(typeof node === 'string') node = getNode(node);

  const index = attr(target, 'data-index');

  attr(node, 'src', `./assets/${data[index-1].name}.jpeg`)  // 이미지 변경

  attr(node, 'alt',  data[index-1].alt)   // 대체텍스트 변경
}

//! 텍스트 설정하는 함수 
function setNameText(target, node){
  if(typeof node === 'string') node = getNode(node);
  
  const index = attr(target, 'data-index');

  node.textContent = data[index-1].name;    // 이미지 위 텍스트 변경

}



const nav = getNode('.nav');
const visualImage = getNode('.visual img');
const body = getNode('body');
const nickName = getNode('.nickName');


//* nav > ul > li > btn > img

function handleSlider(e){

  const target = e.target.closest('li');          // 이미지 클릭하면 가까운 li 찾기
  if(!target) return;                             // 가까운 li가 없으면 종료

  const list = getNodes('nav li');                // getNodes로 네비게이션의 모든 리스트들 가져오기
	
  list.forEach((li)=>{                            // 네비게이션의 리스트 아이템들의 is-active 클래스 모두 제거해서 박스 테두리 없애기
    removeClass(li, 'is-active');
	})
  addClass(target, 'is-active');                  // 내가 선택한 이미지(target)에만 박스 테두리 추가하기 
     
   

  //* 클릭하면 이미지 바뀌게 하기, 대체 텍스트 바뀌게 하기
  setImage(target ,visualImage)

  //* 배경색 바뀌게 하기
  setBgColor(target, body)

  //* 글씨 바뀌게 하기
  setNameText(target, nickName);


}

nav.addEventListener('click', handleSlider);


















// //* 함수 안 쓰고 짜보기 -------------------------------------------


// const nav = getNode('.nav');
// const visualImage = getNode('.visual img');
// const body = getNode('body');
// const nickName = getNode('.nickName');


// function handleSlider(e){

//   const target = e.target.closest('li');          // 이미지 클릭하면 가까운 li 찾기

//   if(!target) return;                             // 가까운 li가 없으면 종료

//   const list = getNodes('nav li');                // getNodes로 네비게이션의 모든 리스트들 가져오기

// 	list.forEach((li)=>{                            // 네비게이션의 리스트 아이템들의 is-active 클래스 모두 제거해서 박스 테두리 없애기
//     removeClass(li, 'is-active');
// 	})

//   addClass(target, 'is-active');                  // 내가 선택한 이미지(target)에만 박스 테두리 추가하기 

//   const index = attr(target, 'data-index');       // attr로 내가 선택한 것의 data-index값을 가져와서 index 변수 저장한다.


//   //* 클릭하면 이미지 바뀌게 하기, 대체 텍스트 바뀌게 하기
//   attr(visualImage, 'src', `./assets/${data[index-1].name}.jpeg`); // -> 이미지
//   attr(visualImage, 'alt', data[index-1].alt); // -> 대체 텍스트


//   // //* 배경색 바뀌게 하기
//   // if(!(data[index-1].color[1])){
//   //   body.style.background = `linear-gradient(to bottom, ${data[index-1].color[0]} , #000)`;
//   // }
//   // else{
//     body.style.background = `linear-gradient(to bottom, ${data[index-1].color[0]} , ${data[index-1].color[1]})`;
//   // }


//   // //* 글씨 바뀌게 하기
//   // nickName.textContent = data[index-1].name;

// }

// nav.addEventListener('click', handleSlider);




