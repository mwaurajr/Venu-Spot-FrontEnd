import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage'
import Contact from './components/Contact';

const App = () => {
  // const {
  //   activeMenu,
  //   themeSettings,
  //   toggleThemeSettings,
  //   currentColor,
  //   currentMode,
  // } = useStateContext();
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={ <LandingPage/> } />
        <Route path='login' element={ <LogIn /> } />
        <Route path='/signup' element={ <SignUp /> } />
        {/* <Route path='/' element={ <Home/> } /> */}
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
