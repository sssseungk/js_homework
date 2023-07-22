
## 엘리멘탈 포스터 구현
---

썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 구현하였습니다.

---

### 요구사항
1. 이벤트 처리 방식을 사용해 클릭 이벤트 걸어주기
2. 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주기
3. 배경색 colorB의 기본값은 #000으로 지정하기
4. 함수를 분리시키기 :: setBgColor, setImage, setNameText 

---


### 실행 결과 
![Honeycam 2023-07-21 02-19-14](https://github.com/sssseungk/js-homework/assets/72969123/52bc751e-2ace-4e9b-b70a-24c7db9bf80f)


---
<br>

#### 배경색 설정 함수
```javascript
function setBgColor(target, node){   
  if(typeof node === 'string') node = getNode(node);

  const index = attr(target, 'data-index'); 

  if(!(data[index-1].color[1])){
    node.style.background = `linear-gradient(to bottom, ${data[index-1].color[0]} , #000)`;
  }
  else{
    node.style.background = `linear-gradient(to bottom, ${data[index-1].color[0]} , ${data[index-1].color[1]})`;
  }
}

```
if-else 문으로 통해 colorB의 값이 존재하지 않을 땐 colorB의 색상을 검정색으로 지정하였고, 그 외의 경우에는 data 배열에 저장된 color 값을 받아와 적용하였습니다. 


<br>
<br>

#### 이미지, 대체텍스트 설정 함수
```javascript
function setImage(target, node){
  if(typeof node === 'string') node = getNode(node);

  const index = attr(target, 'data-index');

  attr(node, 'src', `./assets/${data[index-1].name}.jpeg`)  

  attr(node, 'alt',  data[index-1].alt) 
}
```
클릭한 이미지의 data-index 값을 받아와 data 배열에서 올바른 인덱스의 이미지와 대체텍스트를 받아오는 함수입니다. 
<br>
<br>

#### 이미지 상단 텍스트 설정 함수 

```javascript
function setNameText(target, node){
  if(typeof node === 'string') node = getNode(node);
  
  const index = attr(target, 'data-index');

  node.textContent = data[index-1].name;    // 이미지 위 텍스트 변경

}
``````
마찬가지로 클릭한 이미지의 data-index 값을 받아와 data 배열에서 인덱스가 일치하는 속성의 name 값을 받아와 텍스트를 설정하는 함수입니다. 

<br>
<br>

```javascript
const nav = getNode('.nav');
const visualImage = getNode('.visual img');
const body = getNode('body');
const nickName = getNode('.nickName');


function handleSlider(e){

  const target = e.target.closest('li');     

  if(!target) return;                             

  const list = getNodes('nav li');          
	
  list.forEach((li)=>{ removeClass(li, 'is-active');})
  
  addClass(target, 'is-active');              
     
  setImage(target ,visualImage)

  setBgColor(target, body)

  setNameText(target, nickName);

}

nav.addEventListener('click', handleSlider);
```

작은 이미지를 클릭했을 때 이미지 겉에 흰색 테두리가 생성되도록 하였고,
이미지 중복 선택은 되지 않도록 removeClass를 사용하였습니다.
그리고 setImage, setBgColor, setNameText 함수를 호출하여 클릭한 이미지에 따라 이미지의 종류, 대체텍스트, 상단 텍스트, 배경색이 되도록 하였습니다. 
