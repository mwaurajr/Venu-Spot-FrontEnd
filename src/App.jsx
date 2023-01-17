import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithNavbar from './manager-dashboard/layouts/WithNavbar';
import WithOutnavbar from './manager-dashboard/layouts/WithOutnavbar';
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import Home from './pages/home'
import About from './pages/about'
import Users from './pages/users'
import MyVenues from './pages/venues';
import UpdateUser from './pages/update-user';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithOutnavbar/>}>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>
        <Route element={<WithNavbar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/my-venues' element={<MyVenues/>}/>
          <Route path='/update-profile' element={<UpdateUser/>}/>



        </Route>
      </Routes>
    </Router>
  )
}

export default App
