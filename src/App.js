import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Addcontent from './Addcontent';
import SignIn from './SignIn.jsx';
import Content from './Content.jsx';
import User from './User.jsx'
import './user.css'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Addcontent />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/notes" element={<Content />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
