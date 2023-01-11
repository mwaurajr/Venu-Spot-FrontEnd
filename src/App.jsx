import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Venues from './components/Venues'

function App() {

  return (
    <>
        {/* <SearchBar/> */}
        <SideBar />
        <Venues />
      </>

  )
}

export default App
