import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import "./App.css";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    toggleThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();
  return (
    <div className="App">
      <NavBar/>
      <Footer />
    </div>
  )
}

export default App
