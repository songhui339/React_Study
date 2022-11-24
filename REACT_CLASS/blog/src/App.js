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


  return (
    <div className="App">
      <div className="black-nav">
        <div style={ titleStyle }>개발 Blog</div>
      </div>

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
        <hr />
      </div>

    </div>
  );
}

export default App;
