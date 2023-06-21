
import './App.css';
import  { React,useEffect, useRef } from 'react';

function App() {
  
  return (
    <div>
    
  
      <header>
              <h1>대구일자리</h1>
              <label htmlFor="check">
                <img src="static/img/bar.png" />
              </label>
              <input type='checkbox' id='check'></input>
              <nav>   
                  <label htmlFor="check">
                    <img id='close' src="static/img/close.png" />
                  </label>
                  <a href=''>시청공고</a>
                  <a href=''>채용공고</a>
                  <a href=''>대구뉴스</a>
                  <a href=''>시민혜택</a>
                  <a href='' >로그인</a>
                  <a href='' >회원가입</a>
                </nav>
        </header>

        <main>
  
        </main>
    </div>
  );
}

export default App;

