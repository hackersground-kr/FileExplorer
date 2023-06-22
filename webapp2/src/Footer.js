import { NavLink  } from 'react-router-dom';
import './css/Footer.css';

export default function Footer(){


  return(
    <footer>
        <NavLink  to="/DaeguCityhall" >
          <div>
            <img src="static/img/cityhall.png" /> 
            대구시청
          </div>
        </NavLink  >

        <NavLink  to="/DaeguJob" >
          <div>
              
            <img src='static/img/job.png'/> 
            일자리
          </div>
        </NavLink  >

        <NavLink  to="/" >
          <div>
              
            <img src='static/img/home.png'/> 
              홈
          </div>
        </NavLink  >
  
        <NavLink  to="/DaeguNews">
            <div>
                
              <img src='static/img/news.png'/> 
              뉴스
            </div>
          </NavLink  >

          <NavLink  to="/DaguePeople">
          <div>
              
            <img src='static/img/People.png'/> 
          시민혜택
          </div>
        </NavLink >
    </footer>
  )
}