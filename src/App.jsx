import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import NavBar from './components/navBar'

function App() {

  return (   
    <>
 <div classname='App'>
        <SearchBar/>
        <NavBar/>
      </div>
      <hr></hr>
      <h2>Our Venues</h2>
      </>

  )
}

export default App
