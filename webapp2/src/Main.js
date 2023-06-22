

import Footer from './Footer';
import './css/Main.css';


export default function Main(){
  function closePop(){
    document.getElementById('popup').style.display = "none";
  }



  return(
    <main>
        <div id='menu1'>
              <div id='home'>
                <h1>홈</h1>
              </div>

            <div id='main_one'>
                  <div>
                  <p>경상북도와 대구일보가 <br></br>함께하는 식문화 개선 사업!</p>
                  <iframe src="https://www.youtube.com/embed/jpdHgOv2RcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
            
                  <div>
                    <h1>채용공고</h1>
                      <p>	
                        2023년도 제2회 대구광역시 지방공무원 임용시험 <br></br><sub>응시현황</sub></p><br></br>
                       <p> 2023년도 제1회 대구광역시 지방공무원 임용시험 <br></br><sub>최종합격자 발표 및 신규임용후보자 등록 공고</sub></p><br></br>
                      <p>  2023년도 제2회 대구광역시 지방공무원 임용 <br></br> <sub>필기시험 시간 및 장소 공고</sub></p>
                  </div>
                
            </div>

              <div id='popup'>
                <img id='close' onClick={closePop} src="static/img/close.png"></img>
             <div>
                  <img src="static/img/monitoring1.png"/>
                  <p>대구의 시청 공고, 일자리<br></br>
                  뉴스 시민혜택 등을 알 수 있습니다.</p>
              </div>

              <div>
                  <img src="static/img/monitoring2.png"/>
                  <p>앱의 사용하여 더 나은 대구의 <br></br>
                  삶을 살아갈 수 있습니다.</p>
              </div>
            </div>           
      </div>

    </main>
  )
}