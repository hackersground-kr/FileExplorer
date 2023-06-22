
import './css/App.css';
import  { React,useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DaguePeople from './DaeguPeople';
import DaeguCityhall from './DaeguCityhall';
import  DaeguNews from './DaeguNews';
import  Login_signup from './Login_signup';
import  Main from './Main';
import DaeguJob from './DaeguJob';


function App() {
  useEffect(()=>{
    
    setTimeout(()=>{
        
        document.getElementById('wrap').style.opacity = 1;
        document.getElementById('first').style.opacity = 0;
        setTimeout(()=>{
          document.getElementById('first').style.display = "none";
        },400)
    },2000);
  },[])

  return (
    <div id='App' >
         <div id='first'>
            <h1>대구 취업 서비스</h1>
       
         </div>
         

          <div id='wrap'>
              <Header/>
            
                  <BrowserRouter >
                      <Routes>
                          <Route path='/' excat element={ <Main/>} />
                          <Route path='/DaguePeople' element={<DaguePeople/>}/>
                          <Route path='/DaeguCityhall' element={<DaeguCityhall/>}/>
                          <Route path='/DaeguNews' element={<DaeguNews/>}/>
                          <Route path='/DaeguJob' element={<DaeguJob/>}/>
                          <Route path='/Login_signup' element={<Login_signup/>}/>
                      </Routes>

                      <Routes>
                          <Route path='/*' element={   <Footer/>}/>
                      </Routes>
                  </BrowserRouter>

          </div>
    </div>
  );
}

export default App;

