/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [글제목, 글제목변경] = useState(['날씨 짱 추워', '이정후 짱짱맨', '사고 싶은게 너무 많아']); 
  // let [글제목2, 글제목변경2] = useState('날씨 짱 추워2'); 

  let [like, updateLike] = useState(0);

  let posts = '이정후 짱짱맨';
  let titleStyle =  { color : 'tomato', fontSize : '25px'}

  function updateTitle() {
    // 1. 일단 기존 state의 deep copy
    var newArray = [...글제목];
    // 2. copy한 변수에 수정사항 반영
    newArray[0] = '날씨 안 추워';
    // 3. 변경함수()에 집어넣기
    글제목변경( newArray );
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div style={ titleStyle }>개발 Blog</div>
      </div>
      {/* <button onClick={ updateTitle }>버튼</button> */}

      <div className='list'>
        <h3> { 글제목[0] } <span className='likeBtn' onClick={ ()=>{ updateLike( like + 1 ) } }>👍🏻</span> { like } </h3>
        <p>22.11.24 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3> { 글제목[1] } </h3>
        <p>22.11.24 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3> { 글제목[2] } </h3>
        <p>22.11.24 발행</p>
        <hr/>
      </div>

      {/* <Modal></Modal> */}
      <Modal />



    </div>
  );
}

// 새로운 컴포넌트 만들기
function Modal() {
  return (
      <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
}

export default App;
