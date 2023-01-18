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
import Bookings from './components/Bookings';
import Reviews from './components/Reviews';
import LandingPage from './components/LandingPage'
import Contact from './components/Contact';
import Admin from './components/Admin';


import Dashboard from './Manager/managerDashboard';

function App() {
  return (
    < div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={ <LandingPage/> } />
        <Route path='login' element={ <LogIn /> } />
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/admin' element={ <Admin/> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/venues' element={ <Venues /> } />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/reviews' element={<Reviews />} />
      </Routes>

   
    </div>
  )
}

export default App
