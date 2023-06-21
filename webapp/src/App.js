
import './App.css';
import  { React,useEffect, useRef } from 'react';

function App() {
  // const deferredPrompt = useRef(null);

  // const showInstallButton = () => {
  //   const installButton = document.getElementById('install-button');
  //   installButton.style.display = 'block';
  // };

  // const handleInstall = () => {
  //   alert('ss');  
  //   if (deferredPrompt.current) {
  //     deferredPrompt.current.prompt();
  //     deferredPrompt.current.userChoice.then((choiceResult) => {
  //       if (choiceResult.outcome === 'accepted') {
  //         console.log('앱이 설치되었습니다.');
  //       } else {
  //         console.log('앱 설치가 거부되었습니다.');
  //       }
  //       deferredPrompt.current = null;
  //     });
  //   }
  // };

  // useEffect(() => {
  //     const handleBeforeInstallPrompt = (e) => {
  //       e.preventDefault();
  //       deferredPrompt.current = e;
  //       showInstallButton();
  //     };
  
  //     window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  
  //     return () => {
  //       window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  //     };

  // }, []);

  return (
    <div>
      {/* 앱의 내용 */}
  
      <header>
            <nav>
            <button id="install-button" >
            앱 설치
          </button>
              <a href=''>시청공고</a>
              <a href=''>채용공고</a>
              <a href=''>대구뉴스</a>
              <a href=''>시민혜택</a>
              <a href='' >로그인</a>
              <a href='' >회원가입</a>
            </nav>
        </header>
    </div>
  );
}

export default App;

