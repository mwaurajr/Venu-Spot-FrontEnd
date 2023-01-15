import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import SideBar from './components/SideBar'
import Venues from './components/Venues'
import Card from './components/Card';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage'
import Contact from './components/Contact';
import Admin from './components/Admin';

function App() {
  // const {
  //   activeMenu,
  //   themeSettings,
  //   toggleThemeSettings,
  //   currentColor,
  //   currentMode,
  // } = useStateContext();
  
  return (
    < div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={ <LandingPage/> } />
        <Route path='login' element={ <LogIn /> } />
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/admin' element={ <Admin/> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
      {/* <Venues /> */}
      <Footer />
    </div>
  )
}

export default App
