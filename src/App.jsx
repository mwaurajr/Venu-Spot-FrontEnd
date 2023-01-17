import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import MyVenues from './pages/MyVenues.jsx';
import Clients from './pages/Clients';
import Comment from './pages/Comment.jsx';
import EditProfile from './pages/EditProfile';
import AddVenue from './pages/AddVenue.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-venues" element={<MyVenues />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/my-clients" element={<Clients />} />
          <Route path="/manage-venue" element={<AddVenue />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;