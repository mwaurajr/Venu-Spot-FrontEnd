import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithNavbar from './manager-dashboard/layouts/WithNavbar';
import WithOutnavbar from './manager-dashboard/layouts/WithOutnavbar';
import Signin from './manager-dashboard/pages/auth/Signin'
import Signup from './manager-dashboard/pages/auth/Signup'
import Home from './manager-dashboard/pages/home'
import About from './manager-dashboard/pages/about'
import Users from './manager-dashboard/pages/users'
import MyVenues from './manager-dashboard/pages/venues';
// Client
import UpdateUser from './manager-dashboard/pages/update-user';
import ClientSidebar from './client-dashboard/components/ClientSidebar';
import ClientHome from './client-dashboard/pages/client-home';


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
          <Route path='/client-side' element={<ClientSidebar/>}/>
          <Route path='/client-home' element={<ClientHome/>}/>





        </Route>
      </Routes>
    </Router>
  )
}

export default App
