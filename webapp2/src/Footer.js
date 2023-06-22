import { Link  } from 'react-router-dom';
import './css/Footer.css';

export default function Footer(){


  return(
    <footer>
        <Link  to="./src/DaeguCityhall" >
          <div>
            <img src="static/img/cityhall.png" /> 
            대구시청
          </div>
        </Link  >

        <Link  to="/DaeguJob" >
          <div>
              
            <img src='static/img/job.png'/> 
            일자리
          </div>
        </Link  >

        <Link  to="/" >
          <div>
              
            <img src='static/img/home.png'/> 
              홈
          </div>
        </Link  >
  
        <Link  to="/DaeguNews">
            <div>
                
              <img src='static/img/news.png'/> 
              뉴스
            </div>
          </Link  >

          <Link  to="/DaguePeople">
          <div>
              
            <img src='static/img/People.png'/> 
          시민혜택
          </div>
        </Link >
    </footer>
  )
}