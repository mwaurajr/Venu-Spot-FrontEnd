import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages0/Dashboard.jsx';
import MyVenues from './pages0/MyVenues.jsx';
import Clients from './pages0/Clients';
import Comment from './pages0/Comment.jsx';
import EditProfile from './pages0/EditProfile';
import AddVenue from './pages0/AddVenue.jsx';
import Cart from './components/Cart';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/navigation" element={<Navigation />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-venues" element={<MyVenues />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/my-clients" element={<Clients />} />
          <Route path="/manage-venue" element={<AddVenue />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/payment" element={<Cart />} />

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;