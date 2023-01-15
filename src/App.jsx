import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Venues from './components/Venues'

function App() {

import Card from './components/Card';
import NavBar from './components/NavBar';
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
    <>
        {/* <SearchBar/> */}
        <SideBar />
        <Venues />
      </>
  )
}

export default App
