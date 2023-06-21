
import './css/App.css';
import  { React,useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DaguePeople from './DaeguPeople';
import DaeguCityhall from './DaeguCityhall';
import  DaeguNews from './DaeguNews';
import  Login_signup from './Login_signup';
import  Main from './Main';


function App() {
  
  return (
    <div>
    
        <Header/>
       
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Main/>} />
                    <Route path='/DaguePeople' element={<DaguePeople/>}/>
                    <Route path='/DaeguCityhall' element={<DaeguCityhall/>}/>
                    <Route path='/DaeguNews' element={<DaeguNews/>}/>
                    <Route path='/DaguePeople' element={<DaguePeople/>}/>
                    <Route path='/Login_signup' element={<Login_signup/>}/>
                </Routes>
            </BrowserRouter>
       
        <Footer/>
    </div>
  );
}

export default App;

